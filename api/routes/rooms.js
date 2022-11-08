import exspress from "express";
import {verifyAdmin} from "../utils/verifyToken.js";
import {createRoom, deleteRoom, getRoombyid, getRooms, updateRoom} from "../controllers/roomController.js";
const router = exspress.Router();

//CREATE
router.post('/:hotelid',verifyAdmin,createRoom);

//UPDATE
router.put('/:id',verifyAdmin, updateRoom);

//DELETE
router.delete('/:id/:hotelid',verifyAdmin,deleteRoom);

//GET
router.get('/:id', getRoombyid);

//GET ALL
router.get('/', getRooms);

export default router;