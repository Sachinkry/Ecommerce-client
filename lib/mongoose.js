import { MongoClient } from "mongodb";

let cachedDb = null;

export default async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(process.env.MONGODB_PR_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB-product");
    const db = client.db('test'); // replace 'test' with your database name
    cachedDb = db;
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
