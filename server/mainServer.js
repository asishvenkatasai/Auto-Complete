var express=require("express");
var app=express();
var bodyParser=require('body-parser');
var path=require('path');
var cors = require('cors');


var AllPlaceInfoRoute=require('./routes/allPlacesInfoRoute');
const PORT=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/api/allPlacesInfo",AllPlaceInfoRoute);



app.listen(PORT,(err)=>{
    if(!err)
    console.log(`server running at${PORT}`)
})


