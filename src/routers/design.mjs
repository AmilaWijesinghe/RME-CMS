import { Router } from "express";
import { checkSchema } from "express-validator"; 
import { designvalidationSchema } from "../utils/validations/designValidation.mjs";
import { findDesignById, getDesigns, createDesign, updateDesign } from "../controllers/designContrller.mjs"; 

const router = Router();

  router.get("/api/design", getDesigns);

  router.post("/api/design", checkSchema(designvalidationSchema), createDesign);
    
  router.put("/api/design/:id", findDesignById, checkSchema(designvalidationSchema), updateDesign);
  
  export default router;