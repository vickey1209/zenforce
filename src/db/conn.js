const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("db connected")
}).catch((error)=>{
    console.log("error in db connection");
    
})
   

