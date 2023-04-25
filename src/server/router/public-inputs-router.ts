import { z } from "zod";
import { createRouter } from "./context";

export const publicInputsRouter = createRouter()
    .query("get", {
        input: z.object({
            componentId: z.string(),
            pageId: z.string(),
        }),
        resolve: async ({ input, ctx }) => {
            const { componentId, pageId } = input;

            return await ctx.prisma.input.findMany({
                where: {
                    componentId: componentId,
                },
                include: {
                    value: {
                        where: {
                            pageId: pageId,
                        },
                        select: {
                            value: true,
                        },
                    },
                },
            });
        },
    })
    .query("getPageInput", {
        input: z.object({
            id: z.string(),
        }),
        resolve: async ({ input, ctx }) => {
            const { id } = input;

            return await ctx.prisma.pageInputsValues.findUnique({
                where: {
                    id,
                },
            });
        },
    });
