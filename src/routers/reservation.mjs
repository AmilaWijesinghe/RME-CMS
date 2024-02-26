import { Router } from "express";
import { getAvailableTabels, makeAReservation, updateReservation, cancelReservation} from "../controllers/reservationController.mjs";


const router = Router();

router.post("/availableTables", getAvailableTabels);

router.post("/", makeAReservation);

router.put("/:id", updateReservation);

router.delete("/:id", cancelReservation)

export default router;
