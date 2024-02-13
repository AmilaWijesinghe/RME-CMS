import { Router } from "express";
import { MenuItems } from "../models/menuItem.mjs"

const router = Router();

router.get("/api/menuitems", async (request, response) => {
  try {
    const menuItems = await MenuItems.find({});
    response.status(200).send(menuItems);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving menu items" });
  }
});

router.post("/api/menuitems", async (request, response) => {
  try {
    const newMenuItem = new MenuItems(request.body);
    console.log(newMenuItem)
    const savedMenuItem = await newMenuItem.save();
    response.status(201).send(savedMenuItem); 
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Failed to create menu item" });
  }
});

export default router;
