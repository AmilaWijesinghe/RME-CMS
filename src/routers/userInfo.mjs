import { Router, request, response } from "express";
import { userInfo, userInfo } from "../models/userInfo.mjs";

const router = Router();

const findUserInfoById = async(request,response,next) => {
    const { id } = request.params;
    const userInfo = await userInfo.findById(id);
    if(!userInfo) return response.status(400).json({ message: `cannot find any userInfo with ID ${id}` });
    request.existUserInfo = userInfo;
    next();
  }

router.post("/api/userInfo", async (request, response) => {
  const { body } = request;
  try {
    const existingUserInfo = await userInfo.findOne({ userId: body.userId });
    if (existingUserInfo) {
      const updatedUserInfo = await userInfo.findOneAndUpdate(
        { userId: body.userId },
        body,
        { new: true }
      );
      return response.status(200).send(updatedUserInfo);
    }
    const newUserInfo = new userInfo(body);
    const saveUserInfo = newUserInfo.save();
    return response.status(200).send(saveUserInfo);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Failed to update/create user info" });
  }
});

router.get("/api/userInfo/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const existuserInfo = await userInfo.findOne({ userId: id });
    if (!existuserInfo)
      return response.status(404).send({ message: "User info not found" });
    return response.status(200).send(existuserInfo);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Failed to retrieve user info" });
  }
});

router.put("/api/order?:id", findUserInfoById, async (request,response) => {
    const { id } = request.params;
    try {
        await userInfo.findByIdAndUpdate(id, request.body);
        const updatedUserinfo = await userInfo.findById(id)
        return response.status(200).send(updatedUserinfo);
    } catch (error) {
        console.error(error);
    response.status(500).send({ message: "Error updating userInfo" });
    }
});

router.delete("/api/order/:id", findUserInfoById, async (request,response) => {
    const { id } = request.params;
    try {
      const item = await userInfo.findByIdAndDelete(id);
      return response.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

export default router;
