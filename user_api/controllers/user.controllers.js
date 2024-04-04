import { StudentModel } from "../models/students.models";

export const getUsers = async (req, res) => {

    const getResult = await StudentModel.find();
    if (getResult.length === 0) {
        return res.status(404).json ("No data found")
    } else {
        return res.status(200).json(getResult);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const getOneUser = await StudentModel.findOne();

        if(!getOneUser) {
            return res.status(404).json(`User with the given id:${req.params.id} was not found`);
        } else {
            res.status(200).json(getOneUser)
        }
    } catch(error) {
        next(error);
    }
    
};

export const createUser = async (req, res) => {

    const userResult = await StudentModel.create({ ...req.body});

    if (!userResult) {
        return res.status(404).json ("Error creating new user");
    } else {
        return res.status(201).json(`New user with name with name ${user.firstName} was successfully  created`)
    }
};

export const deleteUser = async (req, res) => {

    const deleteOneUser = await StudentModel.findByIdAndDelete();

    if (!deleteOneUser) {
        return res.status(404).json(`The user with the given id:${req.params.id} was not found`)
    } else {
        return res.status(200).json('User deleted successfully')
    }
}

export const updateUser = async (req, res) => {
 try{
    const updateResult = await StudentModel.findByIdAndUpdate();

    if(!updateResult) {
        return res.status(404).json(`User with the given id:${req.params.id} was not found`)
    } else {
        res.staust(200).json('User has been updated Successfully')
    }
} 
     catch (error) {
        next(error);
    }

    
};