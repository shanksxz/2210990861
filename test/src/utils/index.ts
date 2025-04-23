import { z } from "zod";

export const nutritionSchema = z.object({
    id: z.string(),
    name: z.string(),
    calories: z.number(),
    date: z.string(),
    time: z.number(),
    calBreakDown: z.object({
        protein: z.string(),
        carbs: z.string(),
        fat: z.string()
    }),
    quantity: z.number()
})

export type NutritionType = {
    id: string
    name: string,
    calories: number,
    date: string,
    time: number,
    calBreakDown: {
        protein: string,
        carbs: string,
        fat: string
    },
    quantity: number
}