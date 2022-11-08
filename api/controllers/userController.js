import User from "../models/User.js";


export const updateUser = async (req,res,next)=>{

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedUser);

    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req,res,next)=>{

    try {

        const deleteUser = await User.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json(`User ${req.params.id} has been deleted!`);

    } catch (err) {
        next(err);
    }
}

export const getUserbyid = async (req,res,next)=>{

    try {
        const foundUser = await User.findById(
            req.params.id,
        );
        res.status(200).json(foundUser);

    } catch (err) {
        next(err);
    }
}

export const getUsers = async (req,res,next)=>{

    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);

    } catch (err) {
        next(err);
    }
}