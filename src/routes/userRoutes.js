const express=require("express");
const router=express.Router();
const {getUserConroller,createUserContoller,updateUserController,deleteUserController}=require("../controller/userController");

router.get("/",getUserConroller);
router.post("/",createUserContoller);
router.put("/",updateUserController);
router.delete("/",deleteUserController);
module.exports = router;
