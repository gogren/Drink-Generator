import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI)

        mongoose.connection.on("connected", () => {
            console.log("Connected to db successfully");
        })
    } catch (error) {
        console.log("Failed to connect to db", error);
    }
}