import dotenv from "dotenv";
import neo4j from "neo4j-driver";
// import { Neo4jVectorStore, SearchType } from "@langchain/community/vectorstores/neo4j_vector";
// import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

dotenv.config();

const uri = "neo4j+s://89f945a2.databases.neo4j.io";
const user = "neo4j";
const password = "GbBvOUS1v9HKuUH8YeGz8VY0JQjxCToKlpqmyFsZYCA";

export const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

driver.getServerInfo().then((a)=>console.log(a)).catch((error)=>console.log(error))
