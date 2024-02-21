import { Router } from "express";
import { createTable, getTables, getTableById, getOneTable, updateTable, deleteTable } from "../controllers/tableController.mjs";

const router = Router();

router.get("/api/table", getTables);

router.get("/api/table/:id", getTableById, getOneTable);

router.post("/api/table", createTable);

router.put("/api/table/:id", getTableById, updateTable);

router.delete("/api/table/:id", deleteTable);

export default router;