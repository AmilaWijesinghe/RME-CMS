import { Schema, model } from 'mongoose';

const dummyValueSchema = new Schema({
    Order_ID:{
        type:Number
    },
    Order_Date:{
        type:String
    },
    Item_Name:{
        type:String
    },
    Quantity:{
        type:Number
    },
    Product_Price:{
        type:Number
    },
    Product_Price:{
        type:Number
    },
    Total_products:{
        type:Number
    }
});

export const dummValue = model('dummyValues', dummyValueSchema);