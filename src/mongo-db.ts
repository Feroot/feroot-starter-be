import { mongoUri, mongoDb } from "./config";
import { MongoClient } from "mongodb";

export const db = new MongoClient(mongoUri).db(mongoDb);
