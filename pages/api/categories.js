import connectDB from '@/lib/mongoose';

export default async function handle(req, res) {
  // Set cache headers for GET method
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
  }

  const { method } = req;
  const db = await connectDB();

  if (method === 'GET') {
    try {
      const categoriesCollection = db.collection('categories');
      const categories = await categoriesCollection.find().toArray();

      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
