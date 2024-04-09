import { LoginModel } from "../models/login.model.js";
import generateToken from "../token/token.js";
import hashPassword from "../utils/hashPassword.js";
import errorHandler from "../middlewares/error.middleware.js";

// Function to create a new login record
export const createLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password before saving it
    const hashedPassword = await hashPassword(password);

    // Create a new login record
    const newLogin = new LoginModel({ username, password: hashedPassword });
    await newLogin.save();

    res.status(201).json({ message: "Login record created successfully" });
  } catch (error) {
    // Handle errors using the error handling middleware
    errorHandler(error, res);
  }
};

// Function to retrieve all login records
export const getAllLogins = async (req, res) => {
  try {
    const logins = await LoginModel.find();
    res.status(200).json(logins);
  } catch (error) {
    // Handle errors using the error handling middleware
    errorHandler(error, res);
  }
};

// Function to retrieve a login record by ID
export const getLoginById = async (req, res) => {
  try {
    const { id } = req.params;
    const login = await LoginModel.findById(id);
    if (!login) {
      return res.status(404).json({ error: "Login record not found" });
    }
    res.status(200).json(login);
  } catch (error) {
    // Handle errors using the error handling middleware
    errorHandler(error, res);
  }
};

// Function to update a login record
export const updateLogin = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    // Hash the password before updating it
    const hashedPassword = await hashPassword(password);

    const updatedLogin = await LoginModel.findByIdAndUpdate(
      id,
      { username, password: hashedPassword },
      { new: true }
    );

    if (!updatedLogin) {
      return res.status(404).json({ error: "Login record not found" });
    }

    res.status(200).json(updatedLogin);
  } catch (error) {
    // Handle errors using the error handling middleware
    errorHandler(error, res);
  }
};

// Function to delete a login record
export const deleteLogin = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLogin = await LoginModel.findByIdAndDelete(id);
    if (!deletedLogin) {
      return res.status(404).json({ error: "Login record not found" });
    }
    res.status(200).json({ message: "Login record deleted successfully" });
  } catch (error) {
    // Handle errors using the error handling middleware
    errorHandler(error, res);
  }
};
 