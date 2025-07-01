import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config(); // 加载 .env 文件中的 MONGO_URI 值，供 process.env.MONGO_URI 使用。
const app = express();

app.get('/products', async (req, res) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: 'Please fill all the fields' });
  }

  const newProducts = new Product(product);
  try {
    await newProducts.save();
    res.status(201).json({ success: true, data: newProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

console.log(process.env.MONGO_URL);

// postman test


app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port http://localhost:3000');
})
