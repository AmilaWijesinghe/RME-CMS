import { Router } from "express";
import { getPageContent, updatePageContent } from "../controllers/aboutPageController.mjs";

const router = Router()

router.get("/", getPageContent);

router.put("/", updatePageContent);

export default router;