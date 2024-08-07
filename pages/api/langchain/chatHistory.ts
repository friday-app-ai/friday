import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { BufferMemory } from "langchain/memory";
import { MongoDBChatMessageHistory } from "@langchain/mongodb";

const handler = async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  
  const client = new MongoClient(process.env.MONGODB_URI || "", {
    driverInfo: { name: "langchainjs" },
  });
  await client.connect();
  const collection = client.db("test").collection("memory");
  
  const sessionId = req.body.session_id;
  
  const memory = new BufferMemory({
    chatHistory: new MongoDBChatMessageHistory({
      collection,
      sessionId,
    }),
  });
  
  const history = await memory.chatHistory.getMessages()
  console.log("sessionID.................",sessionId);
  
  return res.status(200).json({history,sessionId})
};

export default handler;
