import mongoose from "mongoose";

const RestaurantInfoSchema = new mongoose.Schema({
  companyEmail: {
    type:String,
  },
  phoneNumber: {
    type:Number,
  },
  location: {
    type:String,
  }
});

export const RestaurantInfo = mongoose.model("restaurantInfo", RestaurantInfoSchema);
