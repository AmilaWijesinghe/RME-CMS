import { Router } from "express";
import { validationResult,checkSchema } from "express-validator"; 
import { Design } from "../models/design.mjs"; 
import { designvalidationSchema } from "../utils/validations/designValidation.mjs"; 

const router = Router();

const findDesignById = async(request,response,next) => {
    const { id } = request.params;
    const item = await Design.findById(id);
    if(!item) return response.status(400).json({ message: `cannot find any design with ID ${id}` });
    request.findDesign = item;
    next();
  }
   
  router.get("/api/design", async (request, response) => {
    try {
      const design = await Design.find({});
      response.status(200).send(design);
    } catch (error) {
      console.error(error);
      response.status(500).send({ message: "Error retrieving design" });
    }
  });

  router.post("/api/design", checkSchema(designvalidationSchema), async (request, response) => {
    const result = validationResult(request)
    if(!result.isEmpty()) return response.status(400).send(result.array());
    try {
      const newMenuItem = new Design(request.body);
      const savedMenuItem = await newMenuItem.save();
      response.status(201).send(savedMenuItem);
    } catch (error) {
      console.error(error);
      response.status(500).send({ message: "Failed to create menu item" });
    }
  });
    
  router.put("/api/design/:id", findDesignById, checkSchema(designvalidationSchema), async (request, response) => {
    const result = validationResult(request)
    if(!result.isEmpty()) return response.status(400).send(result.array());
    const { id } = request.params;
    try {
      const item = await Design.findByIdAndUpdate(id, request.body);
      const updatedItem = await Design.findById(id);
      return response.status(200).send(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;