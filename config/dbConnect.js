const mongoose = require('mongoose')

// import  dotenv file to put the env file's variable into process object 

require('dotenv').config();

const dbConnect = () =>{

    // establish a connection 
    
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true ,
        useUnifiedTopology : true
    })
    .then(()=>{
        console.log("Mongoose connected successfully")
    })
    .catch((error) =>{
    console.log("error occur " + error)
    process.exit(1)
    })
}

module.exports = dbConnect;