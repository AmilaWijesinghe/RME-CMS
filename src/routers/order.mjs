import { Router, request, response } from "express";
import { Order } from "../models/order.mjs";

const router = Router();

const findOrderById = async (request, response, next) => {
  const { id } = request.params;
  const order = await Order.findById(id);
  if (!order)
    return response
      .status(400)
      .json({ message: `can not find any order with ID ${id}` });
  request.existOrder = order;
  next();
};

router.get("/api/order", async (request, response) => {
  try {
    const orders = await Order.find();
    return response.status(200).send(orders);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving orders" });
  }
});

router.get("/api/order/:id", findOrderById, (request, response) => {
  const { existOrder } = request;
  try {
    return response.status(200).send(existOrder);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving order" });
  }
});
router.post("/api/order", async (request, response) => {
  try {
    const newOrder = await Order.create(request.body);
    return response.status(201).send(newOrder);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error creating order" });
  }
});

router.put("/api/order/:id", findOrderById, async (request, response) => {
  const { id } = request.params;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    return response.status(200).send(updatedOrder);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error updatind order" });
  }
});

router.delete("/api/order/:id", async (request, response) => {
  const { id } = request.params;
  try {
    await Order.findOneAndDelete(id);
    return response.status(200);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error deleting order" });
  }
});

export default router;
