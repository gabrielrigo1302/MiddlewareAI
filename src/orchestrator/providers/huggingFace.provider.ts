import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { config } from 'dotenv';

config()

export const huggingFaceTextToTextProvider = async() => {

}

export const huggingFaceTextEmbeddingProvider = async(text: string): Promise<number[] | undefined> => {
    const embedding = new HuggingFaceInferenceEmbeddings({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        apiKey: process.env.HUGGING_FACE_KEY,
    })
    
    try {
        return await embedding.embedQuery(text);
    } catch (error) {
        console.log("Embedding error: ", error);
        throw new Error("Erro ao tentar fazer embedding")
    }
}