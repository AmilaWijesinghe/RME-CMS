import { Router } from "express";
import { getAvailableTabels, makeAReservation, updateReservation, cancelReservation} from "../controllers/reservationController.mjs";


const router = Router();

router.post("/api/reservation/availableTables", getAvailableTabels);

router.post("/api/reservation", makeAReservation);

router.put("/api/reservation/:id", updateReservation);

router.delete("/api/reservation/:id", cancelReservation)

export default router;
