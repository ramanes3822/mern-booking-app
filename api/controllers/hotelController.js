import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body);
    try {

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch (err) {
        next(err);
    }
}

export const updateHotel = async (req,res,next)=>{

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedHotel);

    } catch (err) {
        next(err);
    }
}

export const deleteHotel = async (req,res,next)=>{

    try {

        const deleteHotel = await Hotel.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json(`Hotel ${req.params.id} has been deleted!`);

    } catch (err) {
        next(err);
    }
}

export const getHotelbyid = async (req,res,next)=>{

    try {
        const foundHotel = await Hotel.findById(
            req.params.id,
        );
        res.status(200).json(foundHotel);

    } catch (err) {
        next(err);
    }
}

export const getHotels = async (req,res,next)=>{

    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);

    } catch (err) {
        next(err);
    }
}