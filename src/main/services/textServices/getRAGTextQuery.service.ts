
import { driver } from "../../../db/graph"
import { config } from 'dotenv';
import { textEmbeddingOrchestration } from "../../../orchestrator";


config()

export const getRAGTextQueryService = async (prompt: string) => {
    const rag = driver;
    const queryEmbed = await textEmbeddingOrchestration(prompt)

    let result: any = "";

    try {
        result = await rag.session().run(
            `
            MATCH (c:Chunk)
            WITH c,
                gds.similarity.cosine(c.embedding, $query_embedding) AS similarity
            ORDER BY similarity DESC
            LIMIT 1
            RETURN c.content AS content,
                c.id AS chunk_id,
                similarity
            `,
            {
                query_embedding: queryEmbed,
            }
        );
    } catch (error) {
        console.log("Neo4j error: ", error);
    } finally {
        driver.close();
    }

    return result.records[0]._fields;
};

//     console.log("input === ", input)
//     const dbResult = await (await conectVectorDB()).similaritySearchWithScore(input, 1);
//     console.log("dbResult === ", dbResult);
    
//     const relevantChunks = dbResult?.map(result => result[0]?.pageContent?.replace('text: ', '')).filter(Boolean);

//     console.log("relevantChunks === ", relevantChunks);
    
//     if (relevantChunks.length === 0) {
//         return "Sorry, I couldn't find enough information to answer.";
//     }

//     const context = relevantChunks.join("\n");
//     const prompt = `
//         Response de forma concisa e natural baseada no seguinte contexto:
//         Não use informação de fora do contexto providenciado.

//         Contexto:
//         ${context}

//         Pergunta: ${input}

//         Informe uma resposta direta e informativa:
//     `;

//     console.log("prompt === ", prompt)

//     // return await model.invoke(prompt);
//     return "teste"
// };