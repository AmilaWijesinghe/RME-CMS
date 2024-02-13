import { Router } from "express";
import menuItemRouter from "../routers/menuItem.mjs";
import categoryRouter from "../routers/category.mjs";

const router = Router();

router.use(menuItemRouter);
router.use(categoryRouter);

export default router;