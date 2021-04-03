import csvtojson from 'csvtojson';
import mongoose from 'mongoose';
import NEA from '../src/models/NEA.js';
import 'dotenv/config.js';

const csvFilePath = 'OrbitalParameters_PHAs.csv';

const data = await csvtojson().fromFile(csvFilePath);

mongoose.connect(process.env.DB_MONGO);

NEA.collection.drop();

NEA
  .create(data)
  .then(NEAsCreated => {
    console.log(`Created: ${NEAsCreated.length} NEA`);
    mongoose.connection.close()
  })
  .catch(err => console.log(err));
