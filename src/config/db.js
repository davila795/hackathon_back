import mongoose from 'mongoose';
import 'dotenv/config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('DB connected')
  } catch (error) {
    console.log(`DB ERROR: ${error}`);
    process.exit(1)
  }
}

export default connectDB;
