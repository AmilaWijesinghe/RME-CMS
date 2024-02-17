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
            price:{
                type:Array
            }
        }
    ],
    paid:{
        type:Boolean
    }
},
{Date:true}
);
export const Order = mongoose.model("orders", OrderSchema);