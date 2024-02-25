import { Router } from "express";
import menuItemRouter from "../routers/menuItem.mjs";
import categoryRouter from "../routers/category.mjs";
import designRouter from "../routers/design.mjs";
import comboPlanRouter from "../routers/comboPlan.mjs";
import userRouter from "../routers/user.mjs"
import tableRouter from "../routers/table.mjs"
import reservationRouter from "../routers/reservation.mjs";
import orderRouter from '../routers/order.mjs';
import kitchenRouter from "./kitchen.mjs"
import dummyValuesRouter from "../routers/dummyValues.mjs"

const router = Router();

router.use(menuItemRouter);
router.use(categoryRouter);
router.use(designRouter);
router.use(comboPlanRouter);
router.use(userRouter);
router.use(tableRouter);
router.use(reservationRouter);
router.use(orderRouter);
router.use(kitchenRouter);
router.use(dummyValuesRouter)

export default router;