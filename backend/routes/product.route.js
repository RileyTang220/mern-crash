import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js'; // Importing the controller is not necessary here since we are defining routes directly

const router = express.Router();

router.post('/', createProduct);

router.delete('/:id', deleteProduct);

router.get('/', getProducts);

router.put('/:id', updateProduct);

export default router;