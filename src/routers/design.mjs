import { Router } from "express";
import { checkSchema } from "express-validator"; 
import { designvalidationSchema } from "../utils/validations/designValidation.mjs";
import { findDesignById, getDesigns, updateDesign } from "../controllers/designContrller.mjs"; 

const router = Router();

  router.get("/", getDesigns);
    
  router.put("/:id", findDesignById, checkSchema(designvalidationSchema), updateDesign);
  
  export default router;