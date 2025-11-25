import { huggingFaceTextEmbeddingProvider } from "../providers";

export const huggingFaceTextEmbeddingAdapter = async(text:string) => {
    return await huggingFaceTextEmbeddingProvider(text)
}