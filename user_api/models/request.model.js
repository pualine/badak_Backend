import { Schema, model } from "mongoose";

// Define Request Schema
const requestSchema = new Schema({
  fullName: { type: String, required: true },
  school: { type: String, required: true },
  programme: { type: String, required: true },
  certification: { type: String, required: true },
});

// Export request model based on  the schema created above
export const RequestModel = model("Request", requestSchema, "requests");
