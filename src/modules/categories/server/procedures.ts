import { prisma } from "@/lib/prisma";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query( async () => {
        const data = await prisma.categories.findMany({
            // select: {
            //     id: true,
            //     name: true, 
            //     description: true
            // }
        });

        return data;
    })
})