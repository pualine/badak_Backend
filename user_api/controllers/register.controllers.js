import { RegisterModel } from "../models/register.models";
import errorHandler from "../middlewares/error.middleware";

 export const createRegister = async (req, res, next) => {
  try {
    const registerData = new RegisterModel(req.body);

    const savedRegister = await registerData.save();

    if (savedRegister) {
      return res.status(201).json({
        message: "User registered successfully",
        user: savedRegister,
      });
    } else {
      return res.status(500).json({
        error: "Error registering user",
      });
    }
  } catch (error) {
     errorHandler(error, res);
  }
};

 export const getRegisters = async (req, res, next) => {
  try {
    const registers = await RegisterModel.find();

    if (registers.length === 0) {
      return res.status(404).json({
        message: "No registered users found",
      });
    } else {
      return res.status(200).json(registers);
    }
  } catch (error) {
     errorHandler(error, res);
  }
};

 export const getRegister = async (req, res, next) => {
  try {
    const register = await RegisterModel.findById(req.params.id);

    if (!register) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
      });
    } else {
      return res.status(200).json(register);
    }
  } catch (error) {
     errorHandler(error, res);
  }
};

 export const updateRegister = async (req, res, next) => {
  try {
    // Find the registered user by ID and update it with the new data
    const updatedRegister = await RegisterModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated user
    );

    if (!updatedRegister) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
      });
    } else {
      return res.status(200).json(updatedRegister);
    }
  } catch (error) {
     errorHandler(error, res);
  }
};

export const deleteRegister = async (req, res, next) => {
  try {
    const deletedRegister = await RegisterModel.findByIdAndDelete(req.params.id);

    if (!deletedRegister) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`
      });
    } else {
      return res.status(200).json({
        message: `User with ID ${req.params.id} has been deleted successfully`
      });
    }
  } catch (error) {
    next(error);
  }
};