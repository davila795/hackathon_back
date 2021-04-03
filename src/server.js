import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/db.js';

import authRoutes from './routes/auth.js'
import neasRoutes from './routes/neas.js'
import userRoutes from './routes/user.js'

export function run() {
  //  Create server
  const app = express();

  // Connect DB
  connectDB();

  //  If client, enable cors
  app.use(cors());

  //  Enable express.json
  app.use(express.json({ extended: true }));

  //  Port
  const port = process.env.PORT || 4000;

  //  Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/nea', neasRoutes);
  app.use('/api/user', userRoutes);


  //  Initialize
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
};

if (process.env.NODE_ENV !== 'testing') {
  run();
}
