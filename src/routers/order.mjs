import { Router } from "express";
import { getOrders, createOrder, getOneOrder, findOrderById, updateOrder, deleteOrder} from "../controllers/orderController.mjs";

const router = Router();

router.get("/", getOrders);

router.get("/:id", findOrderById, getOneOrder);

router.post("/", createOrder);

router.put("/:id", findOrderById, updateOrder);

router.delete("/:id", deleteOrder);

export default router;
