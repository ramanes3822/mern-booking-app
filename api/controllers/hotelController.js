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

    const {min, max, ...others} = req.query;

    try {
        const allHotels = await Hotel.find({
            ...others,
            cheapestPrice: {$gt:min | 1, $lt:max || 999},
        }).limit(req.query.limit);
        res.status(200).json(allHotels);
    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req,res,next)=>{
    const cities = await req.query.cities.split(",");
    const list = await Promise.all(cities.map(city=>{
        return Hotel.countDocuments({city:city})
    }));
    try {
        res.status(200).json(
            {"cities":cities,"count":list}
        );

    } catch (err) {
        next(err);
    }
}

export const countByType = async (req,res,next)=>{
    try {
       const hotelCount = await Hotel.countDocuments({type:"hotel"});
       const apartmentCount = await Hotel.countDocuments({type:"apartment"});
       const resortCount = await Hotel.countDocuments({type:"resort"});
       const villaCount = await Hotel.countDocuments({type:"villa"});
       const cabinCount = await Hotel.countDocuments({type:"cabin"});

       res.status(200).json([
           {type:"hotel",count:hotelCount},
           {type:"apartment",count:apartmentCount},
           {type:"resort",count:resortCount},
           {type:"villa",count:villaCount},
           {type:"cabin",count:cabinCount},
       ]);

    } catch (err) {
        next(err);
    }
}