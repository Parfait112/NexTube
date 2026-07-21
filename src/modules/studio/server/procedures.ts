import { z } from "zod"
import { prisma } from "@/lib/prisma";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { Prisma } from "@/generated/prisma";
import { mux } from "@/lib/mux";
import { itemAxisPredicate } from "recharts/types/state/selectors/axisSelectors";


export const studioRouter = createTRPCRouter({
    getMany: protectedProcedure
        .input(
            z.object({
                cursor: z.object({
                    id: z.number(),
                    updatedAt: z.date(),
                })
                    .nullish(),
                limit: z.number().min(1).max(100),
            })
        )
        .query(async ({ ctx, input }) => {
            const { cursor, limit } = input;
            const { id: userId } = ctx.user;

           

            const where: Prisma.VideosWhereInput = {
                userId,
            };

            if (cursor) {
                where.OR = [
                    {
                        updated_at: {
                            lt: cursor.updatedAt,
                        },
                    },
                    {
                        AND: [
                            {
                                updated_at: cursor.updatedAt,
                            },
                            {
                                id: {
                                    lt: cursor.id,
                                },
                            },
                        ],
                    },
                ];
            }

            const data = await prisma.videos.findMany({
                where,
                orderBy: [
                    {
                        updated_at: "desc",
                    },
                    {
                        id: "desc",
                    },
                ],
                take: limit + 1 ,
            });
            //to check if the is more items
            const hasMore = data.length > limit;
            //if there is more items it should remove the last items
            const items = hasMore ? data.slice(0, -1) : data;
            //set the nextcursor to the last items 
            const lastItem = items[items.length - 1];
            const nextCursor = hasMore ?
            {
                id: lastItem.id,
                updatedAt: lastItem.updated_at
            } : null

            return {
                items,
                nextCursor,
            };
        }),
})

