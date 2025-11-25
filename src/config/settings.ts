import { config } from 'dotenv';

config();

export const settings = {
  NEO4J_URI: process.env.NEO4J_URI || 'neo4j://localhost:7687',
  NEO4J_USER: process.env.NEO4J_USER || 'neo4j',
  NEO4J_PASSWORD: process.env.NEO4J_PASSWORD || 'password',
};
