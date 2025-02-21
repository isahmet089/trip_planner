const User=require("../models/User");

const getUserConroller=async (req,res)=>{
    try {
        const users= await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
};
const createUserContoller= async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        const saveUser= await User.create({
            name,
            email,
            password,
        });
        res.status(201).json(saveUser);
    } catch (error) {
        console.log(error)
    }
};
const updateUserController=(req,res)=>{
    
};
const deleteUserController=(req,res)=>{

};

module.exports={
    getUserConroller,
    createUserContoller,
    updateUserController,
    deleteUserController,
};