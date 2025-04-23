import { ZodError } from "zod";
import type { Request, Response } from "express";
import { nutritionSchema, NutritionType } from "../utils";

const db : NutritionType[] = [];
const target = 1234;

export function addNutrition(req: Request, res: Response) {
    try {
    // fake db call, in memory instead
        const validate = nutritionSchema.parse(req.body);
        if(!validate) throw Error
        db.push(validate);
        res.status(201).json({ success: true, message: "Successfully added nutrition"});
    } catch (error) {
        if(error instanceof ZodError) {
            //? not sure about the status code here
            res.status(500).json({ success : false, error: error.message})
        } else {
            res.status(500).json({ sucess: false, error: "Internal Server Erorr"})
        }
    }
}

export function getDailyNutritionData(req: Request, res: Response) {
    try {
        const todaysDate = new Date().toLocaleDateString();
        // find all data from arr with todays date
        const newData = db.filter((ele) => ele.date === todaysDate)

        //? think of a better approach
        const dailyBreakDown = { protein : 0, carbs: 0, fat: 0, cal: 0 }
        for(const ele of newData) {
            dailyBreakDown.protein += Number(ele.calBreakDown.protein);
            dailyBreakDown.carbs += Number(ele.calBreakDown.carbs);
            dailyBreakDown.protein += Number(ele.calBreakDown.protein);
            dailyBreakDown.cal += Number(ele.calories);
        }

        res.status(200).json({
            success: true,
            data: {
                dailyBreakDown,
                isTargetAchieved: dailyBreakDown.cal <= target
            }
        })

    } catch (error) {
        res.status(500).json({ success: false, error: "Internal Server Error"})
    }
}

