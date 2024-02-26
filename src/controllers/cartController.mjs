import { Cart } from "../models/cart.mjs";

export const getCartList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await Cart.findById(id);
    return res.status(200).send(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const createCartList = async (req, res) => {
  try {
    const list = await Cart.create( req.body);
    return res.status(200).send(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
