
var mongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017/";
function getAllAllPlaceInfo(req, res) {
    mongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
        }
        else {
            var db = dbHost.db("slDbData");
            db.collection("places", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Not able to connect to the collections" });
                }
                else {
                  
                    coll.find({}).toArray((err,data)=>{
                        if(err)
                        {
                            res.status(500);
                            res.json({message:"Error connecting to the mongodb server"});
                        }
                        else
                        {
                            console.log("All places -",data);
                            res.json(data);
                        }
                    })
                }
            })
        }
    })
}

module.exports = { getAllAllPlaceInfo };