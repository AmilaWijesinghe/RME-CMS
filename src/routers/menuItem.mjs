import { Router, request, response } from "express";
import { MenuItems } from "../models/menuItem.mjs";
import { validationResult,checkSchema } from "express-validator"; 
import { menuItemValidationSchema } from "../utils/validations/menuItemValidation.mjs"; 
import  cloudinary  from "../utils/cloudinary.mjs";
import { Img } from "../models/img.mjs";

const router = Router();

const findItemById = async(request,response,next) => {
  const { id } = request.params;
  const item = await MenuItems.findById(id);
  if(!item) return response.status(400).json({ message: `cannot find any item with ID ${id}` });
  request.findItem = item;
  next();
}

router.get("/api/menuitem", async (request, response) => {
  try {
    const menuItems = await MenuItems.find({});
    response.status(200).send(menuItems);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving menu items" });
  }
});

router.get("/api/menuitem/:id", findItemById, async (request, response) => {
  const { findItem } = request;
  try {
    return response.status(200).send(findItem);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Error retrieving menu item" });
  }
});

router.post("/api/menuitem", async (request, response) => {
  // const result = validationResult(request)
  // if(!result.isEmpty()) return response.status(400).send(result.array());
  const { itemName, description, imgURL, category, basePrice, sizes, extraIngredients } = request.body
  if(!result.isEmpty()) return response.status(400).send(result.array());
  try {
    // console.log(request.body)
    // const imageResult = await cloudinary.uploader.upload(imgURL)
    // console.log(imageResult)
    const newItem = await MenuItems.create({
      itemName,
      description,
      imgURL:imageResult.url,
      category,
      basePrice,
      sizes,
      extraIngredients
    })
    response.status(201).send(newItem);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Failed to create menu item" });
  }
});

router.post("/api/menuitem/img", async (req, res) => {
  try {
    const img = req.files;

    console.log(img);

    // 3. Upload image to Cloudinary
    const imageResult = await cloudinary.uploader.upload(img, {
      resource_type: 'auto', // For automatic type detection
      public_id: 'menuitem_img_' + Date.now(), // Optional: Set custom public ID
      use_filename: true, // Optional: Preserve original filename if desired
    });

    // 4. Handle upload errors
    if (!imageResult || !imageResult.url) {
      return res.status(500).send({ message: "Failed to upload image to Cloudinary" });
    }

    // 5. Create new image record in database
    const newImage = await Img.create({
      imgURL: imageResult.url,
      // Add other fields as needed (e.g., name, description)
    });

    // 6. Send successful response
    res.status(201).send(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" }); // Generic error message for production
  }
});


router.put("/api/menuitem/:id", findItemById, async (request, response) => {
  // const result = validationResult(request)
  // if(!result.isEmpty()) return response.status(400).send(result.array());
  const { id } = request.params;
  const { itemName, description, imgURL, category, basePrice, sizes, extraIngredients } = request.body
  try {
    const updateditem = await MenuItems.findByIdAndUpdate(id,{ $set: { itemName, description, imgURL, category, basePrice, sizes, extraIngredients }
    }, { new: true } );
    return response.status(200).send(updateditem);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
});

router.delete("/api/menuitem/:id", findItemById, async (request, response) => {
  const { id } = request.params;
  try {
    const item = await MenuItems.findByIdAndDelete(id);
    return response.sendStatus(200);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

export default router;
