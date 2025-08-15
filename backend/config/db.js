import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://cbauser:foodorderdb5@cluster0.s7yrnro.mongodb.net/CBA_Project').then(()=>console.log("DB Connected"));
}