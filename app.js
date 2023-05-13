const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

dotenv.config({path:'./config.env'})

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

// Set CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(router);

app.listen(port, () => {
    console.log(`Server started at : ${port}`);
});
