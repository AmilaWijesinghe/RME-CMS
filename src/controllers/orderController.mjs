import { Order } from "../models/order.mjs";
import crypto from "crypto";

function generateCode() {
  const randomBytes = crypto.randomBytes(2); // Generate 2 random bytes
  const code = randomBytes.toString("hex").slice(0, 4); // Convert to hex string and take first 4 digits
  return code;
};

export const findOrderById = async (request, response, next) => {
  const { id } = request.params;
  const order = await Order.findById(id);
  if (!order)
    return response
      .status(400)
      .json({ message: `can not find any order with ID ${id}` });
  request.existOrder = order;
  next();
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving orders" });
  }
};

export const getOneOrder = (req, res) => {
  const { existOrder } = req;
  try {
    return res.status(200).send(existOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving order" });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { userEmail, phone, cartProduct, totalPrice, paymentStatus } =
      req.body;
    const code = generateCode();
    const newOrder = await Order.create({
      orderCode: code,
      userEmail,
      phone,
      cartProduct,
      totalPrice,
      paymentStatus,
    });
    return res.status(201).send(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating order" });
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send(updatedOrder);
  } catch (error) {
    console.error(error);
    responresse.status(500).send({ message: "Error updatind order" });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findOneAndDelete(id);
    return res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting order" });
  }
};
