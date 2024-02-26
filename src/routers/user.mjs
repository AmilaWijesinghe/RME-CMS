import { Router } from "express";
import { findUserById, getUsers, getSingleUser, createUser, updateUser, deleteUser } from "../controllers/userController.mjs";

const router = Router();

router.get("/",getUsers );

router.get("/:id", findUserById, getSingleUser);

router.post("/", createUser);

router.put("/:id", findUserById, updateUser);

router.delete("/:id", deleteUser);

export default router;