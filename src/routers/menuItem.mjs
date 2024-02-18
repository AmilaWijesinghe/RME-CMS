import { Router } from "express";
import { getMenuItems, findItemById, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem} from "../controllers/menuItemController.mjs"

const router = Router();

router.get("/api/menuitem", getMenuItems);

router.get("/api/menuitem/:id", findItemById, getMenuItemById);

router.post("/api/menuitem", createMenuItem);

router.put("/api/menuitem/:id", findItemById, updateMenuItem);

router.delete("/api/menuitem/:id", findItemById, deleteMenuItem);

export default router;
