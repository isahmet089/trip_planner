const express=require('express');
const app=express();
const path = require("path");
const userRouter=require("./routes/userRoutes");

app.use(express.json());

app.use("/api/user",userRouter);

module.exports =app;
