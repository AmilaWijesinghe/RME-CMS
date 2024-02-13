import mongoose, { Schema } from "mongoose";

const ComboSchema = new mongoose.Schema({
    comboName: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      description: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      items: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      price: {
        type: mongoose.Schema.Types.Number,
        required: true,
      },
})