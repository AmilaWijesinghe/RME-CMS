import mongoose, { Schema } from "mongoose";

const ComboPlanSchema = new mongoose.Schema({
    comboPlanName: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      description: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      items: [
        {
          itemName:{
            type:Array,
            required:true
          },
          basePrice:{
            type:Array,
            required:true
          }
        }
      ],
      price: {
        type:Number,
        required: true,
      },
      imageURL: {
        type:String,
        required: true,
      }
},
{
  timestamps: true
}
);

export const ComboPlan = mongoose.model("comboPlan", ComboPlanSchema);