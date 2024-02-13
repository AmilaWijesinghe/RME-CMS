import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      email: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      password: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      image: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      role: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
})

export const Admin = mongoose.model("Admin", AdminSchema);