import { huggingFaceTextEmbeddingAdapter } from "./adapters";

export const textEmbeddingOrchestration = async(text: string) => {
    return await huggingFaceTextEmbeddingAdapter(text)
}