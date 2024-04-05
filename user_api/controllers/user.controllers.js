// Import StudentModel from models/students.models
import { StudentModel } from "../models/user.models.js";



// Create a new user and return a success message
export const createUser = async (req, res, next) => {
    try {
      const user = await StudentModel.create({...req.body });
      if (user) {
        return res.status(201).json({
          message: "User created successfully",
          user: user
        });
      } else {
        return res.status(404).json({
          error: "Error creating new user"
        });
      }
    } catch (error) {
      next(error); // Pass the error to the error handler
    }
  };
  

// Export functions to get users
export const getUsers = async (req, res, next) => {
 try {
     const getResult = await StudentModel.find();
     if (getResult.length === 0) {
       return res.status(404).json("No data found");
     } else {
       return res.status(200).json(getResult);
     }
 } catch (error) {
    next(error)
 }
};

// Get a single user by ID, or return an error message if not found
export const getUser = async (req, res, next) => {
  try {
    const getOneUser = await StudentModel.findOne(req.params.id);

    if (!getOneUser) {
      return res
       .status(404)
       .json(`User with the given id:${req.params.id} was not found`);
    } else {
      res.status(200).json(getOneUser);
    }
  } catch (error) {
    next(error);
  }
};


// Delete a user by ID and return a success message, or an error message if not found
export const deleteUser = async (req, res, next) => {
 try {
     const deleteOneUser = await StudentModel.deleteOne();
   
     if (!deleteOneUser) {
       return res
        .status(404)
         (`The user with the given id:${req.params.id} was not found`);
     } else {
       return res.status(200).json("User deleted successfully");
     }
 } catch (error) {
    next(error)
 }
};

// Update a user by ID and return a success message, or an error message if not found
export const updateUser = async (req, res, next) => {
  try {
    const updateResult = await StudentModel.updateOne();

    if (!updateResult) {
      return res
       .status(404)
       .json(`User with the given id:${req.params.id} was not found`);
    } else {
      res.status(200).json("User has been updated Successfully");
    }
  } catch (error) {
    next(error);
  }
};