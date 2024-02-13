import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
      }
})

export const category = mongoose.model("category", CategorySchema);