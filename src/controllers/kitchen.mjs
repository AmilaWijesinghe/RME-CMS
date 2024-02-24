import { Order } from "../models/order.mjs";
import { MenuItems } from "../models/menuItem.mjs";

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, {
      orderStatus: req.body.orderStatus,
    });
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
    if (item.itemAvailable === true){
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
