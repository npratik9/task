require("dotenv").config()
const cors= require('cors')
const express= require('express');
const router = require('./router.config');
const app= express()

app.use(cors())

app.use(express.json({
    limit: "2mb" 
}))

app.use("/api/", router)

module.exports= app;