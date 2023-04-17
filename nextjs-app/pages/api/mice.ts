import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, ServerApiVersion } from 'mongodb';

const password = process.env.PASSWORD;
const uri = `mongodb+srv://mongodb:${password}@cluster-ap-south-1.rzpcloa.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let result;
  try {
    await client.connect();
    const collection = await client.db('mouse_db').collection('mouse_collection');
    result = await collection.find({}).toArray();
  } catch(e) {
    console.log(e);
  }
  finally {
    await client.close();
  }

  res.status(200).json(result);
}
