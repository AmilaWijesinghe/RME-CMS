import { Schema, model } from "mongoose";

const landingPageSchema = new Schema({
    headerText:{
        type:String
    },
    paragraph:{
        type:String
    },
    imageURL:{
        type:String
    }
});

export const landingPage = model('LandingPage', landingPageSchema)