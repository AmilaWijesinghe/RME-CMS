import { Router } from "express";
import menuItemRouter from "../routers/menuItem.mjs";
import categoryRouter from "../routers/category.mjs";
import designRouter from "../routers/design.mjs";
import comboPlanRouter from "../routers/comboPlan.mjs";
import userRouter from "../routers/user.mjs"
import tableRouter from "../routers/table.mjs"

const router = Router();

router.use(menuItemRouter);
router.use(categoryRouter);
router.use(designRouter);
router.use(comboPlanRouter);
router.use(userRouter);
router.use(tableRouter);

export default router;