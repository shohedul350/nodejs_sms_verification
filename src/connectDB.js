import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_UR)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected to: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
