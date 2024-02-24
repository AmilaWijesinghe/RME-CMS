import { Router } from "express";
import { getOrders, createOrder, getOneOrder, findOrderById, updateOrder, deleteOrder} from "../controllers/orderController.mjs";

const router = Router();

router.get("/api/order", getOrders);

router.get("/api/order/:id", findOrderById, getOneOrder);

router.post("/api/order", createOrder);

router.put("/api/order/:id", findOrderById, updateOrder);

router.delete("/api/order/:id", deleteOrder);

export default router;
