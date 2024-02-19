import { Router } from "express";
import { checkSchema } from "express-validator";
import { comboPlanValidationSchema } from "../utils/validations/comboPlanValidation.mjs"; 
import { findComboPlanById, getComboPlans, getOneComboPlan, createComboPlan, updateComboPlan, deleteComboPlan } from "../controllers/comboPlanController.mjs";

const router = Router();


  router.get("/api/comboPlan", getComboPlans);
  
  router.get("/api/comboPlan/:id", findComboPlanById, getOneComboPlan );
  
  router.post("/api/comboPlan", checkSchema(comboPlanValidationSchema), createComboPlan);
  
  router.put("/api/comboPlan/:id", findComboPlanById, checkSchema(comboPlanValidationSchema), updateComboPlan);
  
  router.delete("/api/comboPlan/:id", findComboPlanById, deleteComboPlan);
  
  export default router;