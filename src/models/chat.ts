import mongoose, { Document, Schema } from "mongoose";

interface ResponseMetadata {
}

interface AdditionalKwargs {
}

interface Data {
  content: string;
  additional_kwargs: AdditionalKwargs;
  response_metadata: ResponseMetadata;
}

interface Messages {
  type: string;
  data: Data;
}

interface Memory extends Document {
  sessionId: string;
  messages: Messages[];
  mess:string
  number:number
}

const ResponseMetadataSchema = new Schema<ResponseMetadata>({}, { _id: false });

const AdditionalKwargsSchema = new Schema<AdditionalKwargs>({}, { _id: false });

const DataSchema = new Schema<Data>({
  content: { type: String, required: true },
  additional_kwargs: { type: AdditionalKwargsSchema, required: true },
  response_metadata: { type: ResponseMetadataSchema, required: true }
}, { _id: false });

const MessagesSchema = new Schema<Messages>({
  type: { type: String, required: true },
  data: { type: DataSchema, required: true }
}, { _id: false });

const MemorySchema = new Schema<Memory>({
  sessionId: { type: String, required: true },
  messages: { type: [MessagesSchema], required: true },
  mess:[{name:String}],
  number:Number
});

const MemoryModel = mongoose.models.Memory || mongoose.model<Memory>("Memory", MemorySchema);

export default MemoryModel;
