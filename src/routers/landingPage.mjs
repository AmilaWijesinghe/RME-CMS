import { Router } from "express";
import { getPageContent, updatePageContent } from "../controllers/landingPageController.mjs";

const router = Router()

router.get("/", getPageContent);

router.put("/", updatePageContent);

export default router;