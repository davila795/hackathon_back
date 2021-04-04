const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async () => {
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
