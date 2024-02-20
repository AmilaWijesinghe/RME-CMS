import { Router } from "express";
import { checkSchema } from "express-validator"; 
import { categoryValidationSchema } from "../utils/validations/categoryValidation.mjs"; 
import { findCategoryById, getCategories, getOneCategory, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.mjs";

const router = Router();

router.get("/api/categories", getCategories);

router.get("/api/categories/:id", findCategoryById, getOneCategory);

router.post("/api/categories", checkSchema(categoryValidationSchema), createCategory);

router.put("/api/categories/:id", findCategoryById, checkSchema(categoryValidationSchema), updateCategory);

router.delete("/api/categories/:id", findCategoryById, deleteCategory);

export default router;
