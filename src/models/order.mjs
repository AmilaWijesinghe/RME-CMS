import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderCode:{
        type:String
    },
    userEmail:{
        type:String
    },
    phone:{
        type:Number
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
    ],
    totalPrice:{
        type:Number
    },
    orderStatus: {
        type: String,
        enum: ['Placed','Ready','Pickup','Cancelled'],
        default: 'Placed',
      },
    paymentStatus:{
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending',
    },
    orderType:{
        type:String,
        enum:["take Away", "dining"],
        default:"take Away"
    }
},

{Date:true}
);
export const Order = mongoose.model("orders", OrderSchema);