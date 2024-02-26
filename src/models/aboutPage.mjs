import { Schema, model } from "mongoose";

const aboutPageSchema = new Schema({
    paragraph:{
        type:String
    },
    address:{
        type:String
    }
});

export const aboutPage = model('AboutPage', aboutPageSchema)