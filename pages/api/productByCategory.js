import connectDB from '@/lib/mongoose';  // Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const db = await connectDB();
    const productsCollection = db.collection('products');

    try {
      if (req.query.category) {
        const categoryId = req.query.category;
        const ObjectId = require('mongodb').ObjectId; 
        const query = { 'category': new ObjectId(categoryId) }; // MongoDB requires an ObjectId for matching

        const products = await productsCollection.find(query).toArray();
        
        if (products.length) {
          return res.status(200).json(products);
        } else {
          return res.status(404).json({ error: 'No products found for this category' });
        }
      } else {
        return res.status(400).json({ error: 'Missing category ID' });
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
