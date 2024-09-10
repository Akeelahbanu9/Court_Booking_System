const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
app.use(express.json());
const port = 5000;


mongoose.connect('mongodb://localhost:27017/Court_Booking'); //mongodb connection edtablisgment

mongoose.connection.once('open', () => {
    console.log('Data base connection has been made');
  });
  

  const authRoutes = require('./routes/authRoutes');
  const courtRoutes = require('./routes/courtRoutes');
  const bookingRoutes = require('./routes/bookingRoutes');
  const requestRoutes = require('./routes/requestRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/courts', courtRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/requests', requestRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});



app.listen(port, () => console.log('Server running on port 5000'));
