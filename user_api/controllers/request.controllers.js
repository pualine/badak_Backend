import { UserRequestModel } from "../models/request.model.js";

// Controller function to handle userrequests
export const createUserRequest = async (req, res) => {
  try {
    const { name, school, certificate, program } = req.body;
    

    // Create a new user request
    const newUserRequest = new UserRequestModel({
      name,
      school,
      certificate,
      program,
      status: ["Not verified"] // Initial status is "not verified"
    });

    // Save the user request to the database
    await newUserRequest.save();

    res.status(201).json({ message: "User request submitted successfully" });
  } catch (error) {
    console.error("Error submitting user request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



// Controller function to retrieve all user requests
export const getAllUserRequests = async (req, res) => {
  try {
    const userRequests = await UserRequestModel.find();
    res.status(200).json(userRequests);
  } catch (error) {
    console.error("Error fetching user requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to retrieve a user request by ID
export const getUserRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const userRequest = await UserRequestModel.findById(id);
    if (!userRequest) {
      return res.status(404).json({ error: "User request not found" });
    }
    res.status(200).json(userRequest);
  } catch (error) {
    console.error("Error fetching user request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to delete all user requests
export const deleteAllRequests = async (req, res) => {
    try {
        await UserRequestModel.deleteMany({});
        res.status(200).json({ message: "All user requests deleted successfully" });
    } catch (error) {
        console.error("Error deleting all user requests:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller function to delete a user request
export const deleteUserRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUserRequest = await UserRequestModel.findByIdAndDelete(id);
    if (!deletedUserRequest) {
      return res.status(404).json({ error: "User request not found" });
    }
    res.status(200).json({ message: "User request deleted successfully" });
  } catch (error) {
    console.error("Error deleting user request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Controller function to update a user request
export const updateUserRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, school, certificate, program, status } = req.body;
    const updatedUserRequest = await UserRequestModel.findByIdAndUpdate(id, {
      name,
      school,
      certificate,
      program,
      status
    }, { new: true });
    if (!updatedUserRequest) {
      return res.status(404).json({ error: "User request not found" });
    }
    res.status(200).json(updatedUserRequest);
  } catch (error) {
    console.error("Error updating user request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
