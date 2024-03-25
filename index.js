// 1. import ditenv
// loads .env file contents into process .env by  defaults
require('dotenv').config()

//2.import express
const express = require('express')

//3.import cors
const cors = require('cors')

//import router
const router = require('./Routers/router')

//import connection.js file
require('./DB/connections')

//import application specific middleware
/* const appMiddleware = require('./Middleware/appMiddleware')
 */
//4.create server
//Creates an Express application. The express() function is a top-level function exported by the express module.
const pfServer = express()

//5.use of cors in server
pfServer.use(cors())

//6.Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
pfServer.use(express.json())

/* pfServer.use(appMiddleware) */

//use router
pfServer.use(router)

//pfserver use uploads folder
//first arg-the way in which other applications sholud use this folder
//second arg-export that folder-express.static
pfServer.use('/uploads',express.static('./uploads'))

//7.custamize the port - by default -3000
const PORT = 5000 || process.env

//8.to run server
pfServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SCUCESSFULLY AT PORT NUMBER ${PORT}`);
})
pfServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:green">project fair server reunning successfully and ready to accept request from client</h1>`)
})

/* //post request
pfServer.post('/',(req,res)=>{
    res.send(`post request`)
})

//put request
pfServer.put('/',(req,res)=>{
    res.send(`put request`)
}) */