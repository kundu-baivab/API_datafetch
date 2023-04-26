const mongoose=require('mongoose')

const DB=process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    connectTimeoutMS: 30000 // increase the timeout to 30 seconds
}).then(()=>console.log("Database Connected")).catch((err)=>console.log("Error :" + err.message))