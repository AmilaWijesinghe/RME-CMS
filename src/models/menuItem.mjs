import mongoose, { Schema } from "mongoose";

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemsSchema = new mongoose.Schema(
  {
    itemName: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    description: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    img: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    description: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    basePrice: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    sizes: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    extraIngredients: {
      type: [
        {
          name: mongoose.Schema.Types.String,
          price: mongoose.Schema.Types.Number
        },
      ],
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export const MenuItems = mongoose.model("MenuItems", MenuItemsSchema);
