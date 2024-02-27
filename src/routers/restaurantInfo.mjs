import { Router } from "express";
import { createRestaurantInfo, updateRestaurantInfo, getRestaurantInfo } from "../controllers/restauarntInfoControoler.mjs";

const router = Router()

router.get("/", getRestaurantInfo);

router.put("/:id", updateRestaurantInfo);

router.post("/", createRestaurantInfo)

export default router;