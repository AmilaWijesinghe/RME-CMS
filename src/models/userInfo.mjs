import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema({
    userId:{
        type:Number,
        unique: true,
        required: true
    },
    userEmail:{
        type:String,
        unique: true,
        required: true
    },
    streetAddress:{
        type:String,
        required: true
    },
    postalCode:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    }
})

export const userInfo = mongoose.model("userInfo", UserInfoSchema);