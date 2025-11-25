import {
    getRAGTextQueryService
} from "../services/textServices";

export const getRAGTextQueryController = async (input:any) => {
    try {
        return await getRAGTextQueryService(input);
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error('Controller error:', errorMsg);
        throw new Error(`Failed to process request: ${errorMsg}`);
    }
}