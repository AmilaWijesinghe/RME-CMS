import { Router } from "express";
import { getPendingOrders, updateOrderStatus, updateItemStatus, getOderById } from "../controllers/kitchenController.mjs";
import { getMenuItems } from "../controllers/menuItemController.mjs";

const router = Router();

//order

router.put("/api/kitchen/:id", updateOrderStatus);

router.get("/api/kitchen", getPendingOrders);

router.get("/api/kitchen/:id", getOderById);

//item

router.get("/api/kitchen/item", getMenuItems);

router.put("/api/kitchen/item/:id", updateItemStatus);



export default router;