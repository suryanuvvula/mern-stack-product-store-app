import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // process code 1 means exit with failure, 0 means success
        process.exit(1);
    }
}
