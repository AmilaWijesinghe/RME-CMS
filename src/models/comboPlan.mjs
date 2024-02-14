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
            type:String,
            required:true
          },
          basePrice:{
            type:Number,
            required:true
          }
        }
      ],
      price: {
        type: mongoose.Schema.Types.Number,
        required: true,
      },
      imageURL: {
        type: mongoose.Schema.Types.String,
        required: true,
      }
},
{
  timestamps: true
}
);

export const ComboPlan = mongoose.model("comboPlan", ComboPlanSchema);