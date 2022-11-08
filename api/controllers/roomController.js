import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}});
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
}

export const updateRoom = async (req,res,next)=>{

    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedRoom);

    } catch (err) {
        next(err);
    }
}

export const deleteRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}});
        res.status(200).json("room has been deleted!");
    } catch (err) {
        next(err);
    }
}

export const getRoombyid = async (req,res,next)=>{

    try {
        const foundRoom = await Room.findById(
            req.params.id,
        );
        res.status(200).json(foundRoom);

    } catch (err) {
        next(err);
    }
}

export const getRooms = async (req,res,next)=>{

    try {
        const allRooms = await Room.find();
        res.status(200).json(allRooms);

    } catch (err) {
        next(err);
    }
}