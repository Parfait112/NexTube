import { prisma } from "@/lib/prisma";
import { mux } from "@/lib/mux";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";


export const videosRouter = createTRPCRouter({
    create: protectedProcedure.mutation(async ({ ctx }) => {
        const { id: userId } = ctx.user;

        const upload = await mux.video.uploads.create({
            new_asset_settings: {
                passthrough: String(userId),
                playback_policies: ["public"],
                mp4_support: "standard",
            },
            cors_origin: "*",
        });

        const video = await prisma.videos.create({
            data: {
                userId,
                title: "Untitled",
                muxStatus: "waiting",
                muxUploadId: upload.id,
            }
        });

        return {
            video,
            url: upload.url,
        };
    }),
})
