import mongoose from "mongoose";
import "dotenv/config";


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected")
    }
    catch (error) {
        console.log("Error connecting to database", error)
    }
}

export default connectDb;