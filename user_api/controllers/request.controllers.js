// request.controllers.js
const UserRequest = require('./models/UserRequest');

// Controller function to handle user login requests
const loginUserRequest = async (req, res) => {
  try {
    const { email, password, program, certificate } = req.body;
    // Assuming you have authentication logic here

    // Create a new user request
    const newUserRequest = new UserRequest({
      email,
      password,
      program,
      certificate,
      status: ["not verified"] // Initial status is "not verified"
    });

    // Save the user request to the database
    await newUserRequest.save();

    res.status(201).json({ message: "User request submitted successfully" });
  } catch (error) {
    console.error("Error submitting user request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { loginUserRequest };
