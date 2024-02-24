import { Router } from "express";
import { getPendingOrders, updateOrderStatus } from "../controllers/kitchen.mjs";
import { getMenuItems } from "../controllers/menuItemController.mjs";

const router = Router();

router.put("/api/kitchen/:id", updateOrderStatus);
router.get("/api/kitchen", getPendingOrders);
router.get("/api/kitchen/items", getMenuItems);


export default router;