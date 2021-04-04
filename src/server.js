const express = require('express');
const connectDB = require('./config/db.js');
require('dotenv').config()

const authRoutes = require('./routes/auth.js')
const neasRoutes = require('./routes/neas.js')
const userRoutes = require('./routes/user.js')
const clientRoutes = require('./routes/clients.js')

//  Create server
const app = express();

// Connect DB
connectDB();

//  Enable express.json
app.use(express.json({ extended: true }));

//  Port
const port = process.env.PORT || 4000;

//  Routes
app.use('/api/auth', authRoutes);
app.use('/api/nea', neasRoutes);
app.use('/api/user', userRoutes);
app.use('/api/client', clientRoutes);

//  Initialize
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
