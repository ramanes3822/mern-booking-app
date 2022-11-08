import exspress from "express";
import {createHotel, deleteHotel, getHotelbyid, getHotels, updateHotel} from "../controllers/hotelController.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = exspress.Router();

//CREATE
router.post('/',verifyAdmin,createHotel);

//UPDATE
router.put('/:id',verifyAdmin, updateHotel);

//DELETE
router.delete('/:id',verifyAdmin,deleteHotel);

//GET
router.get('/:id', getHotelbyid);

//GET ALL
router.get('/', getHotels);

export default router;