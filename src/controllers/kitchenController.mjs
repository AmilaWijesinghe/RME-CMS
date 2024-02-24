import { Order } from "../models/order.mjs";
import { MenuItems } from "../models/menuItem.mjs";
import { transporter } from "../utils/mail/nodeMailer.mjs";
import { Design } from "../models/design.mjs";

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, {
      orderStatus: req.body.orderStatus,
    });
    const design = await Design.find()
    const order = await Order.findById(id)
    const orderMail = {
      from: {
        name: design.restaurantName,
        address: process.env.USER_EMAIL,
      },
      to: order.userEmail,
      subject: "Your order is ready! ",
      text: "Your order is ready",
      html: `<b> We're excited to let you know that your order ${order.orderCode} is ready for pickup! </b>`,
    }
    await transporter.sendMail(orderMail);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const getPendingOrders = async (req, res) => {
  try {
    const orders = await Order.find({ orderStatus: "Placed" });
    return res.status(200).send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const updateItemStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await MenuItems.findById(id);
    if (item.itemAvailable === true) {
      await MenuItems.findByIdAndUpdate(id, {
        itemAvailable: false,
      });
      return res.sendStatus(200);
    }
    await MenuItems.findByIdAndUpdate(id, {
      itemAvailable: true,
    });
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const getOderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    return res.status(200).send(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
