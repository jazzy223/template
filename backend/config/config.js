import mongoose from "mongoose";
import {configDotenv} from "dotenv";

configDotenv();

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    }
    catch (err) {
        console.log(err);
    }
}