import connectDB from '@/lib/mongoose';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Set cache headers for GET method
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
  }

  try {
    const db = await connectDB();
    const productsCollection = db.collection('products');
    
    const categoryId = req.query.category;
    if (!categoryId) {
      return res.status(400).json({ error: 'Missing category ID' });
    }

    const query = { 'category': new ObjectId(categoryId.toString()) };
    const products = await productsCollection.find(query).toArray();

    if (!products.length) {
      return res.status(404).json({ error: 'No products found for this category' });
    }
    
    return res.status(200).json(products);

  } catch (error) {
    console.error('Error fetching products:', error);  // Remove in production
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
