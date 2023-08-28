import connectDB from '@/lib/mongoose';

export default async (req, res) => {
  const { id } = req.query;
  console.log('id', id)

  try {
    const db = await connectDB();
    const collection = db.collection('products'); // replace 'products' with your collection name

    const product = await collection.findOne({ _id: id });
    console.log('product', product);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
