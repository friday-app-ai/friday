import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { BufferMemory } from "langchain/memory";
import { ChatOpenAI } from "@langchain/openai";
import { ConversationChain } from "langchain/chains";
import { MongoDBChatMessageHistory } from "@langchain/mongodb";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const lesson_name = req.body.lesson_name
  const technology_tech_course_name = req.body.technology_tech_course_name

  const client = new MongoClient(process.env.MONGODB_URI || "", {
    driverInfo: { name: "langchainjs" },
  });
  await client.connect();
  const collection = client.db("langchain").collection("memory");

  const sessionId = new ObjectId().toString();

  const memory = new BufferMemory({
    chatHistory: new MongoDBChatMessageHistory({
      collection,
      sessionId,
    }),
  });

  const model = new ChatOpenAI({
    model: "gpt-4o",
    temperature: 0,
  });

  let master_prompt = `
   You are an AI interviewer chat bot who when given a lesson name and technology/tech course name
                asks relevant questions on the given lesson name: 
                you ask questions in such format:
                
                YOU MUST MAKE SURE YOU DONT ASK SAME QUESTION AGAIN.
                    
                you ask them relevant questions that the user can answer by writing text to you. (at max 3 such questions)
                You also ask them questions that user have to answer by writing code (at least 2 such questions)
                
            
                
                lesson name = ${lesson_name}
                technology/tech course name = ${technology_tech_course_name}
                
                you have to ask them questions one by one, and wait for users to answer the questions.
                if you think that the user didnt answer correctly, give them a hint and ask the same question again untill user answers correctly.
                if you user answers it correctly move on to the next question.
                
                
               
                begin!
    
  `

  let prompt=ChatPromptTemplate.fromMessages([
    ["system", master_prompt],
    ["human", "{input}"],
  ]);

  

  const chain = new ConversationChain({ llm: model, memory,prompt });


  const res1 = await chain.invoke({ input: "hello" });


  
  const chatHistory = await memory.chatHistory.getMessages();

  await memory.chatHistory.clear();

  res.status(200).json({ res1, chatHistory });
};

export default handler;
