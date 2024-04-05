import mongoose from 'mongoose';

// Define schema for user request
const userRequestSchema = new mongoose.Schema({
  name: {type: String, required: true},
  school: {type: String, required: true},
  certificate: {type: String, required: true},
  program: { type: String, required: true},
  
  status: {type: [String],
    enum: ["Verified", "Not verified", "Denied"],
    default: ["Not verified"]
  }
});

// Create a model for user request
export const UserRequestModel = mongoose.model('UserRequest', userRequestSchema, "user_requests");
