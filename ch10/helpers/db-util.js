import { MongoClient } from "mongodb";

import DB_PASSWOARD from "../DB_PASSWOARD";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://joseph0926:${DB_PASSWOARD}@nextjs-cluster.ocb05ix.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db.collection(collection).find(filter).sort(sort).toArray();

  return documents;
}
