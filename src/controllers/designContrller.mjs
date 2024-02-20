import { Design } from "../models/design.mjs";
import { validationResult } from "express-validator";
import cloudinary from "../utils/cloudinary.mjs";

export const findDesignById = async (req, res, next) => {
  const { id } = req.params;
  const item = await Design.findById(id);
  if (!item)
    return res
      .status(400)
      .json({ message: `cannot find any design with ID ${id}` });
  req.findDesign = item;
  next();
};

export const getDesigns = async (req, res, next) => {
  try {
    const design = await Design.find();
    res.status(200).send(design);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving design" });
  }
};

export const createDesign = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  try {
    const { logo, restaurantName, color1, color2 } = req.body;
    const imageResult = await cloudinary.uploader.upload(logo, {
      resource_type: "auto",
      public_id: "menuitem_img_" + Date.now(),
    });
    const newMenuItem = new Design({
      logoURL: imageResult.url,
      restaurantName,
      color1,
      color2,
    });
    const savedMenuItem = await newMenuItem.save();
    res.status(201).send(savedMenuItem);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to create design" });
  }
};

export const updateDesign = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  const { id } = req.params;
  try {
    const { logo, restaurantName, color1, color2 } = req.body;
    const imageResult = await cloudinary.uploader.upload(logo, {
      resource_type: "auto",
      public_id: "menuitem_img_" + Date.now(),
    });
    const updatedDesign = await Design.findByIdAndUpdate(
      id,
      {
        logoURL: imageResult.url,
        restaurantName,
        color1,
        color2,
      },
      {
        new: true,
      }
    );
    return res.status(200).send(updatedDesign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
