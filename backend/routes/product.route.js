import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/products.controller.js';

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;