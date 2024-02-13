import { Router, request, response } from "express";
import { category } from "../models/category.mjs";

const router = Router();

router.get("/api/categories", async (request, response) => {
  try {
    const categories = await category.find({});
    return response.status(200).send(categories);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving categories" });
  }
});

router.post("/api/categories",async (request, response) => {
  const { body } = request;
  try {
    const newCategory = new category(body);
    const savedCategory =await newCategory.save();
    return response.status(201).send(savedCategory);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error creating categories" });
  }
});

export default router;
