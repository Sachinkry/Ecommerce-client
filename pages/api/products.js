import connectDB from '@/lib/mongoose';
import { StatusCodes } from 'http-status-codes';

export default async function handle(req, res) {
  const db = await connectDB();
  const PRODUCTS_COLLECTION = 'products';
  const { method } = req;

  if (method === 'GET') {
    res.setHeader('Cache-Control', 'public, max-age=3600');

    try {
      const productsCollection = db.collection('products');
      const { id } = req.query;
      console.log(id, "no way")
      console.log(db)

      
      if (id) {
        // Validate id before using it (assumes you have a validateId function)
        if (!validateId(id)) {
          return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid ID' });
        }
        const ObjectID = require('mongodb').ObjectId;
        const product = await productsCollection.findOne({ _id: new ObjectID(id.trim()) });

        if (product) {
          return res.json(product);
        } else {
          return res.status(StatusCodes.NOT_FOUND).json({ error: 'Product not found' });
        }
      } else {
        const products = await productsCollection.find().toArray();
        return res.json(products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ error: 'Method Not Allowed' });
  }
}

// Add your ID validation function here
function validateId(id) {
  // Assuming ID should be a non-empty string or a valid MongoDB ObjectID
  if (typeof id !== 'string' || id.trim().length === 0) {
    return false;
  }

  // MongoDB ObjectID is a 24-character hex string
  const validMongoDbIdRegex = /^[a-f\d]{24}$/i;

  return validMongoDbIdRegex.test(id);
}

