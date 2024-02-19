import { Router, request, response } from "express";
import { Category } from "../models/category.mjs";
import { validationResult,checkSchema } from "express-validator"; 
import { categoryValidationSchema } from "../utils/validations/categoryValidation.mjs"; 

const router = Router();

const findCategoryById = async(request,response,next) => {
  const { id } = request.params;
  const category = await Category.findById(id);
  if(!category) return response.status(400).json({ message: `cannot find any category with ID ${id}` });
  next();
}

router.get("/api/categories", async (request, response) => {
  try {
    const categories = await Category.find({});
    return response.status(200).send(categories);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving categories" });
  }
});

router.get("/api/categories/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const item = await Category.findById(id);
    return response.status(200).send(item);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving  category" });
  }
});

router.post("/api/categories", checkSchema(categoryValidationSchema),async (request, response) => {
  const result = validationResult(request)
  if(!result.isEmpty()) return response.status(400).send(result.array());
  const { body } = request;
  try {
    const newCategory = new Category(body);
    const savedCategory =await newCategory.save();
    return response.status(201).send(savedCategory);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error creating categories" });
  }
});

router.put("/api/categories/:id", findCategoryById, checkSchema(categoryValidationSchema), async (request, response) => {
  const result = validationResult(request)
  if(!result.isEmpty()) return response.status(400).send(result.array());
  const { id } = request.params;
  try {
    const updatedItem = await Category.findByIdAndUpdate(id, request.body, { new: true });
    return response.status(200).send(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/api/categories/:id", findCategoryById, async (request, response) => {
  const { id } = request.params;
  try {
    const item = await Category.findByIdAndDelete(id);
    return response.sendStatus(200);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

export default router;
