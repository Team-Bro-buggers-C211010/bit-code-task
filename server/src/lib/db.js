import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
        });
        console.log("Connected to MongoDB on " + conn.connection.host);
    } catch (error) {
        console.log("Failed to connect to MongoDB on " + error.message);
    }
};