import exspress from "express";
import {
    countByCity, countByType,
    createHotel,
    deleteHotel,
    getHotelbyid,
    getHotels,
    updateHotel
} from "../controllers/hotelController.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = exspress.Router();

//CREATE
router.post('/',verifyAdmin,createHotel);

//UPDATE
router.put('/:id',verifyAdmin, updateHotel);

//DELETE
router.delete('/:id',verifyAdmin,deleteHotel);

//GET
router.get('/find/:id', getHotelbyid);

//GET ALL
router.get('/', getHotels);
router.get('/countbycity', countByCity);
router.get('/countbytype', countByType);

export default router;