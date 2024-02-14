import { Router } from "express";
import menuItemRouter from "../routers/menuItem.mjs";
import categoryRouter from "../routers/category.mjs";
import designRouter from "../routers/design.mjs";
import comboPlanRouter from "../routers/comboPlan.mjs";

const router = Router();

router.use(menuItemRouter);
router.use(categoryRouter);
router.use(designRouter);
router.use(comboPlanRouter);

export default router;