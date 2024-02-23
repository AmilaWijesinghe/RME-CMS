import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userEmail:{
        type:String
    },
    phone:{
        type:Number
    },
    streetAddress:{
        type:String
    },
    postCode:{
        type:String
    },
    city:{
        type:String
    },
    cartProduct:[
        {
            itemName:{
                type:Array
            },
            qty:{
                type:Array
            },
            extraIngredients:[
                {
                  ingredientName: {
                    type: Array,
                  },
                  ingredientPrice: {
                    type: Array,
                  },
                },
              ],
            price:{
                type:Array
            }
        }
    ],
    totalPrice:{
        type:Number
    },
    kitchenConfirmed: {
        type: Boolean,
        default: false,
      },
    paymentStatus:{
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending',
    }
},
{Date:true}
);
export const Order = mongoose.model("orders", OrderSchema);