import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: mongoose.Schema.Types.String,
        required: true,
      }
},
{
  timestamps: true
}
);

export const Category = mongoose.model("category", CategorySchema);