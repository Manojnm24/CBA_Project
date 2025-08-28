import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://cbauser:cbauser12345@cluster0.kr7evv0.mongodb.net/CBA_Project').then(()=>console.log("MongoDB Connected"));
}