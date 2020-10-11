var express=require('express');
var router=express.Router();
console.log(100);
var AllPlaceInfoController=require("../controllers/allPlaceInfoController");
router.get("/",AllPlaceInfoController.getAllAllPlaceInfo);

module.exports=router;


