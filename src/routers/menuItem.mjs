import { Router } from "express";
import { getMenuItems, findItemById, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem} from "../controllers/menuItemController.mjs"
import { checkSchema } from "express-validator";
import { menuItemValidationSchema } from "../utils/validations/menuItemValidation.mjs"; 

const router = Router();

router.get("/api/menuitem", getMenuItems);

router.get("/api/menuitem/:id", findItemById, getMenuItemById);

router.post("/api/menuitem", checkSchema(menuItemValidationSchema), createMenuItem);

router.put("/api/menuitem/:id", findItemById, checkSchema(menuItemValidationSchema), updateMenuItem);

router.delete("/api/menuitem/:id", findItemById, deleteMenuItem);

export default router;
