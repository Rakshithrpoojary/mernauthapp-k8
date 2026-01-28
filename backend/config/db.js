import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use MONGO_URI from environment variables
    console.log("URL",process.env.MONGO_URI);
    const conn = await mongoose.connect("mongodb://admin:admin123@mongodb-svc:27017/admin");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  setTimeout(connectDB,5000)
  }
};

export default connectDB;
