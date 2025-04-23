import express, { type Router } from "express";
import { addNutrition, getDailyNutritionData } from "../controllers/api.controller";

const router: Router = express.Router();

router.get("/", getDailyNutritionData);
router.post("/add", addNutrition)

export default router;