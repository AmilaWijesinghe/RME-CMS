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
import landingPageRouter  from "../routers/landingPage.mjs";
import aboutPageRouter from "../routers/aboutPage.mjs"
import aiRouter from "../routers/ai.mjs";

const router = Router();

router.use("/api/menuitem", menuItemRouter);
router.use("/api/categories",categoryRouter);
router.use("/api/design", designRouter);
router.use("/api/comboPlan", comboPlanRouter);
router.use("/api/users", userRouter);
router.use("/api/table", tableRouter);
router.use("/api/reservation", reservationRouter);
router.use("/api/order", orderRouter);
router.use("/api/kitchen", kitchenRouter);
router.use(dummyValuesRouter);
router.use("/api/landingpage", landingPageRouter);
router.use("/api/aboutpage", aboutPageRouter);
router.use("/api/aiReport", aiRouter);

export default router;