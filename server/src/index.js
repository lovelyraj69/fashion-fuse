const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const authJwt = require('../helper/jwt');

const app = express();
const PORT = 8080;

// Load environment variables from .env file
dotenv.config();

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());
app.use(express.json());
// app.use(authJwt());

// Routes
const categoryRoutes = require('../routes/category');
const productsRoutes = require('../routes/products');
const usersRoutes = require('../routes/users');
 
// api
app.use('/api/category', categoryRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello world..!');
});

// Database
// Connection URL (from .env or hardcoded)
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};
connectDB();

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT : ${process.env.PORT}`)
});
