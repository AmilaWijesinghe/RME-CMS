import { Router, request, response } from "express";
import { User } from "../models/user.mjs";

const router = Router();

const findUserById = async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findById(id);
  if (!user)
    return response
      .status(400)
      .json({ message: `cannot find any user with ID ${id}` });
  request.existUser = user;
  next();
};

router.get("/api/users", async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).send(users);
  } catch (error) {
    return response.status(500).send(error);
  }
});

router.get("/api/users/:id", findUserById, async (request, response) => {
  const { existUser } = request;
  try {
    return response.status(200).send(existUser);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: `Error retrieving user by ${id}` });
  }
});

router.post("/api/users", async (request, response) => {
  const { body } = request;
  try {
    const newUser = new User(body);
    const savedUser = await newUser.save();
    response.status(200).send(savedUser);
  } catch (error) {
    console.error("Error saving user:", error);
    response.status(500).send({ message: "Failed to create user" });
  }
});

router.put("/api/users/:id", findUserById, async (request, response) => {
  const { id } = request.params;
  try {
    await User.findByIdAndUpdate(id, request.body);
    const updatedUser = await User.findById(id);9
    return response.status(200).send(updatedUser);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: `Error updating user by ${id}` });
  }
});

router.delete("/api/users/:id", findUserById, async (request, response) => {
  const { id } = request.params;
  try {
    await User.findByIdAndDelete(id);
    return response.sendStatus(200);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: `Error retrieving user by ${id}` });
  }
});

export default router;
