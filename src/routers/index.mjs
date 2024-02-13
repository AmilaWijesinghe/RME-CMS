import { Router } from "express";
import menuItemRouter from "../routers/menuItem.mjs"

const router = Router();

router.use(menuItemRouter);

export default router;