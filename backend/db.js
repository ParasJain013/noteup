const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/";
const connectMongo=()=>{
    mongoose.connect(uri).then(()=>{
        console.log("Connected SuccessFully  .......   MONGO")
    })
}
module.exports = connectMongo;