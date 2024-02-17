import { Router } from "express";
import { ComboPlan } from "../models/comboPlan.mjs"; 
import { validationResult,checkSchema } from "express-validator";
import { comboPlanValidationSchema } from "../utils/validations/comboPlanValidation.mjs"; 

const router = Router();

const findItemById = async(request,response,next) => {
    const { id } = request.params;
    const item = await ComboPlan.findById(id);
    if(!item) return response.status(400).json({ message: `cannot find any comboPlan with ID ${id}` });
    request.findComboPlan = item;
    next();
  }
  
  router.get("/api/comboPlan", async (request, response) => {
    try {
      const comboPlan = await ComboPlan.find({});
      response.status(200).send(comboPlan);
    } catch (error) {
      console.error(error);
      response.status(500).send({ message: "Error retrieving comboPlan" });
    }
  });
  
  router.get("/api/comboPlan/:id", findItemById, async (request, response) => {
    const { findComboPlan } = request;
    try {
      return response.status(200).send(findComboPlan);
    } catch (error) {
      console.error(error);
      response.status(500).send({ message: "Error retrieving comboPlan" });
    }
  });
  
  router.post("/api/comboPlan", checkSchema(comboPlanValidationSchema), async (request, response) => {
    const result = validationResult(request)
    if(!result.isEmpty()) return response.status(400).send(result.array());
    try {
      const newcomboPlan = new ComboPlan(request.body);
      const savedcomboPlan = await newcomboPlan.save();
      response.status(201).send(savedcomboPlan);
    } catch (error) {
      console.error(error);
      response.status(500).send({ message: "Failed to create comboPlan" });
    }
  });
  
  router.put("/api/comboPlan/:id", findItemById, checkSchema(comboPlanValidationSchema), async (request, response) => {
    const result = validationResult(request)
    if(!result.isEmpty()) return response.status(400).send(result.array());
    const { id } = request.params;
    try {
      const updatedItem = await ComboPlan.findByIdAndUpdate(id, request.body,{ new: true });
      return response.status(200).send(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.delete("/api/comboPlan/:id", findItemById, async (request, response) => {
    const { id } = request.params;
    try {
      const item = await ComboPlan.findByIdAndDelete(id);
      return response.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;