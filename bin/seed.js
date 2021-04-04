import csvtojson from 'csvtojson';
import mongoose from 'mongoose';
// import NEA from '../src/models/NEA.js';
import Client from '../src/models/Client.js';
import 'dotenv/config.js';

const csvFilePath = 'List_Of_Clients.csv';

const data = await csvtojson().fromFile(csvFilePath);

mongoose.connect(process.env.DB_MONGO);

// Client.collection.drop();

Client
  .create(data)
  .then(NEAsCreated => {
    console.log(`Created: ${NEAsCreated.length} NEA`);
    mongoose.connection.close()
  })
  .catch(err => console.log(err));
