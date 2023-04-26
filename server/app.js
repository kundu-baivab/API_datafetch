require("dotenv").config();
const express = require("express");
const app = express();
require("../server/conn");
const cors = require("cors");
const User = require("./users_model");

app.use(express.json());
app.use(cors());

const port = 8005;

app.get("/getAllUser", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Credentials","true");
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    const allUser = await User.find({})
      .skip(startIndex)
      .limit(limit);
    const totalUsers = await User.countDocuments();

    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
    };

    res.send({ status: "ok", data: allUser, pagination });
  } catch (e) {
    console.log("Error" + e);
  }
});

app.get('/getTopUsers',async(req,res)=>{
    try {
        res.setHeader("Access-Control-Allow-Credentials","true");
        const allUser=await User.find({});
        res.send({status:'ok',data:allUser});
    } catch (e) {
        console.log("Error"+e)
    }
})

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
