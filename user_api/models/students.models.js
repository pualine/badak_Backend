import { Schema, model } from "mongoose";

//Define Students Schema
const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export request model based on  the schema created above.
export const StudentModel = model("Student", studentSchema, "students");
