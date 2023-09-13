const mongoose = require("mongoose");
// here nodejstutorial is the name of database which  will be created in database
mongoose.connect('mongodb://127.0.0.1:27017/nodejstutorial').then(()=>{
    console.log("connection established to database");
}).catch((e)=>{
    console.log(e);
})


const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required:true
    }
})


// user details is inside the database name of collection
const user = mongoose.model("user_details",schema);
module.exports = user;