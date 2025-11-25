import express from "express";
import { agentRoutes } from "./AgentRoutes";
import { textRoutes } from "./TextRoutes";

export const routes = express.Router();

routes.use('/agent', agentRoutes);
routes.use('/enterprise-rag', textRoutes);
