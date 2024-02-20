import { Router } from "express";
import { availabilityCheck, reservationConfirmation } from "../controllers/reservationController.mjs";

const router = Router()

router.get('/api/tables/:date/:time', availabilityCheck);

router.post("/api/reservation", reservationConfirmation)
  
  export default router;