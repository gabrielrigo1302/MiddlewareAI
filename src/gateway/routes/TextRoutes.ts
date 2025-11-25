import { Router, Request, Response } from "express";
import { getRAGTextQueryController } from "../../main/controllers/text.controller";

export const textRoutes = Router()

textRoutes.get("/query", async (request: Request, response: Response) => {
    try {
        const {
            text
        } = request.body;
        const result = await getRAGTextQueryController(text);
        response.json({
            success: true,
            response: result
        });
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error('Route error:', errorMsg);
        response.status(500).json({
            success: false,
            error: errorMsg,
            message: "Failed to process query. Please ensure Neo4j is running and credentials are correct."
        });
    }
})