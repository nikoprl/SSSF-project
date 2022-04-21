import mongoose from "mongoose";

const connectMongo = async () => {
  const DATABASE_NAME = process.env.DATABASE_NAME || "";
  
  try {
    const connection = await mongoose.connect(process.env.DB_URL, {
      dbName: DATABASE_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ DB connected successfully");
    return connection;
  } catch (e) {
    console.error("❌ Connection to DB failed: ", e);
  }
};

export default connectMongo;