import { Router, Request, Response } from "express";
import { askAgentController } from "../../main/controllers/agent.controller";

export const agentRoutes = Router()

agentRoutes.post("/chat", async (request: Request, response: Response) => {
    const {
        text
    } = request.body;
    
    const result = askAgentController(text)
    response.json({
        response: result
    })
})