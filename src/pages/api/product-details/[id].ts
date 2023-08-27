import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.connect();

    const productsCollection = client.db("pc-builder").collection("products");

    if (req.method === "GET") {
      const productId = req.query.id as string; // Fetch the 'id' parameter from the query
      const product = await productsCollection.findOne({
        _id: new ObjectId(productId),
      });

      if (product) {
        res.status(200).json({ message: "Success", data: product });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    }
  } finally {
    // await client.close();
  }
}

export default run;
