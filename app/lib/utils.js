import mongoose from 'mongoose';

export const connectToDB = async () => {
    const connection = {}
  
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect('mongodb+srv://mikeappdev:<password>@cluster0.ehbtclf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    } catch (error) {
        throw new Error(error);
    }
}