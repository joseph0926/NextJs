import { MongoClient } from "mongodb";

import DB_PASSWORD from "../DB_PASSWORD";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://joseph0926:${DB_PASSWORD}@nextjs-cluster.ocb05ix.mongodb.net/auth-demo?retryWrites=true&w=majority`
  );

  return client;
}
