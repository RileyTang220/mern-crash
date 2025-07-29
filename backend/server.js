import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config(); // Load the MONGO_URI value from the .env file so that it can be accessed via process.env.MONGO_URI
const app = express();

const PORT = process.env.PORT || 3000; // Use the PORT from .env or default to 3000

app.use(express.json()); // Middleware to parse JSON bodies. allows us to access json data in req.body

app.use('/api/products', productRoutes)


app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port http://localhost:' + PORT);
})
