const { MongoClient, ServerApiVersion } = require("mongodb");
import { NextApiRequest, NextApiResponse } from "next";

const uri =
  "mongodb+srv://pc-builder-admin:UoTTpB2gqPzTY0RO@cluster0.grizk.mongodb.net/pc-builder?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
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
      const products = await productsCollection.find({}).toArray();
      res.send({ message: "Success", status: 200, data: products });
    }

    if (req.method === "POST") {
      const products = req.body;
      const result = await productsCollection.insertOne(products);

      res.json(result);
    }
  } finally {
    // await client.close();
  }
}
export default run;
