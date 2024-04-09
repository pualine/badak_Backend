import { RegisterModel } from "../models/register.models";

const createRegister = async (req, res, next) => {
  try {
    const registerData = new RegisterModel(req.body);

    // Save the new registerData to the database
    const savedRegister = await registerData.save();

    // Check if the registration data was successfully saved
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
    next(error);
  }
};

export default createRegister;
