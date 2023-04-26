require('dotenv').config()
const mongoose = require("mongoose");
const data=require('../seeds/data')
const User=require('../users_model')

const DB=process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected")).catch((err)=>console.log("Error :" + err.message))

const seedDB = async()=>{
    await User.deleteMany({})
    for(let i=0;i<1000;i++){
        const u=new User({
            id:`${data[i].id}`,
            first_name:`${data[i].first_name}`,
            last_name:`${data[i].last_name}`,
            email:`${data[i].email}`,
            gender:`${data[i].gender}`,
            income:`${data[i].income}`,
            city:`${data[i].city}`,
            car:`${data[i].car}`,
            quote:`${data[i].quote}`,
            phone_price:`${data[i].phone_price}`
        });
        await u.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
  });
  