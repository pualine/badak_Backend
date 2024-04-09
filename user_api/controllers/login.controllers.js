import { LoginModel } from "../models/login.models";


const createLogin = (req, res, next) =>{
    const  loginData= new LoginModel(req.body);
    
    //checking if the username is already in use or not
    LoginModel.findOne({username: req.body.username}, function(err, user){
        if(user){
            return res.status(400).json({message:"Username already exists"});
        }else{
           loginData
               .save()
               .then(data=>{
                   res.status(201).json(data);
               })
               .catch(error=>{
                   console.log("Error occured while saving data to database");
                   res.status(500).json({message: error.message})
               });
       }
    });
}