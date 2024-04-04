import { Schema, model } from "mongoose";

//Define Students schema
const studentSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  date: { type: Date, default: Date.now() },
  amount: { type: String, required: true },
  diploma: { type: String, required: true },
  status: { type: String, required: true}
});

export const StudentModel = model("Student", studentSchema, "students");
