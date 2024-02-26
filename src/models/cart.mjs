import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({

    userEmail:{
        type:String
    },
    cartProduct:[
        {
            itemName:{
                type:String
            },
            qty:{
                type:String
            },
            sizes: [
                {
                  sizeName: {
                    type: String,
                  },
                  percentage: {
                    type: Number,
                  },
                },
              ],
            extraIngredients:[
                {
                  ingredientName: {
                    type: String,
                  },
                  ingredientPrice: {
                    type: Number,
                  },
                },
              ],
            price:{
                type:Number
            }
        }
    ]
}
);
export const Cart = mongoose.model("cart", CartSchema);