import  express  from "express";
import mongoose from "mongoose";
import routers from "./routers/index.mjs";
import cors from 'cors';

mongoose
	.connect("mongodb+srv://SolidSnake:123@cluster0.yyabstc.mongodb.net/restaurantManagementEngineDB")
	.then(() => console.log("Connected to Database"))
	.catch((err) => console.log(`Error: ${err}`));

const app = express();
app.use(express.json());
app.use(cors());
app.use(routers)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})
