import { Router } from "express";
import { getCartList, createCartList, deleteCart } from "../controllers/cartController.mjs";

const router = Router();

router.get("/:id", getCartList);

router.post("/", createCartList)

router.delete("/:id", deleteCart)

export default router;