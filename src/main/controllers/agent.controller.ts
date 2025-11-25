import {
    askAgentService
} from "../services/agentServices";

export const askAgentController = async (input:any) => {
    return await askAgentService(input)
}