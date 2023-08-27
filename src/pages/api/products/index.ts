const { MongoClient, ServerApiVersion } = require("mongodb");
import { NextApiRequest, NextApiResponse } from "next";

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
      const products = await productsCollection.find({}).toArray();
      res.send({ message: "Success", status: 200, data: products });
    }
  } finally {
  }
}
export default run;
