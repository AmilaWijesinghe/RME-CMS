import mongoose from "mongoose";

const DesignSchema = new mongoose.Schema({
  logo: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  restaurantName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  color1: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  color2: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Design = mongoose.model("design", DesignSchema);
