import mongoose, { Schema } from "mongoose";

const MenuItemsSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    sizes: [
      {
        sizeName: {
          type: String,
          required: true,
        },
        percentage: {
          type: Number,
          required: true,
        },
      },
    ],
    extraIngredients: [
      {
        ingredientName: {
          type: String,
          required: true,
        },
        ingredientPrice: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const MenuItems = mongoose.model("menuItems", MenuItemsSchema);
