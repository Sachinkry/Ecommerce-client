import { MongoClient } from "mongodb";

export default async function connectDB() {
    const client = new MongoClient(process.env.MONGODB_PR_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    try {
        await client.connect();
        console.log("Connected to MongoDB-product");
        return client.db('test'); // replace 'test' with your database name
    } catch (error) {
        console.log("failed to connect to MongoDB", error);
    }
}