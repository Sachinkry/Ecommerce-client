import connectDB from '@/lib/mongoose';
import { StatusCodes } from 'http-status-codes';

export default async function handle(req, res) {
  const db = await connectDB();
  const PRODUCTS_COLLECTION = 'products';
  const { method, query } = req;

  if (method !== 'GET') {
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ error: 'Method Not Allowed' });
  }

  try {
    const productsCollection = db.collection(PRODUCTS_COLLECTION);
    const searchQuery = query.query;

    const products = await productsCollection.find({
      $text: { $search: searchQuery }
    }).toArray();

    return res.json(products);
  } catch (error) {
    console.error('Error during search:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
}
