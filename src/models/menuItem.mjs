import mongoose, { Schema } from "mongoose";

const MenuItemsSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
    },
    description: {
      type: String,
    },
    imgURL: {
        type: String,
    },
    category: {
      type: String,
    },
    basePrice: {
      type: Number,
    },
    sizes: [
      {
        sizeName: {
          type: Array,
        },
        percentage: {
          type: Array,
        },
      },
    ],
    extraIngredients: [
      {
        ingredientName: {
          type: Array,
        },
        ingredientPrice: {
          type: Array,
        },
      },
    ],
  },
  {
    Date: true,
  }
);

export const MenuItems = mongoose.model("menuItems", MenuItemsSchema);
