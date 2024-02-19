import { Router } from "express";
import { createTable } from "../controllers/tableController.mjs";

const router = Router();

router.post("/api/table", createTable);

export default router;