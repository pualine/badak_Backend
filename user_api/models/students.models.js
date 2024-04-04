import { Schema, model } from "mongoose";

//Define Students schema
const studentSchema = new Schema({
  firstName: { type: String, required: true},
  LastName: { type: String, required: true },
  email: { type: String, required:true },
  password: { type: String, required: true },
  // status: { type: String, required: true}
});

export const StudentModel = model("Student", studentSchema, "students");
