import mongoose, { Schema } from "mongoose";

const ImgSchema = new mongoose.Schema({
    imgURL: {
        type:String,
      }
}
);

export const Img = mongoose.model("img", ImgSchema);