import connectDB from '@/lib/mongoose';

export default async function handle(req, res) {
  const { method } = req;
  const db = await connectDB();

  if (method === 'GET') {
    try {
      const productsCollection = db.collection('products');

      if (req.query.id) {
        const productId = req.query.id;
        const product = await productsCollection.findOne({ _id: productId });

        if (product) {
          res.json(product);
        } else {
          res.status(404).json({ error: 'Product not found' });
        }
      } else {
        const products = await productsCollection.find().toArray();
        
        res.json(products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}