import exspress from "express";
import { deleteUser, getUserbyid, getUsers, updateUser} from "../controllers/userController.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";
const router = exspress.Router();

// router.get('/checkauthentication', verifyToken, (req,res,next)=>{
//     res.send("hello user, you are authenticated!");
// });
//
// router.get('/checkuser/:id', verifyUser, (req,res,next)=>{
//     res.send("hello user, you can delete user!");
// });
//
// router.get('/checkadmin/:id', verifyAdmin, (req,res,next)=>{
//     res.send("hello user, you can delete all user account");
// });

//UPDATE
router.put('/:id',verifyUser, updateUser);

//DELETE
router.delete('/:id',verifyUser,deleteUser);

//GET
router.get('/:id',verifyUser, getUserbyid);

//GET ALL
router.get('/',verifyAdmin, getUsers);

export default router;