import { Router } from "express";
import { dummValue } from "../models/dummyValues.mjs";

const router = Router();

router.get("/api/dummyValues/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const value = await dummValue.findById(id);
    console.log(value);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving menu item" });
  }
});

router.post("/api/dummyValues", async (req, res) => {
    try {
      const value = await dummValue.create(req.body);
      console.log(value);
      return res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error retrieving menu item" });
    }
  });

export default router;