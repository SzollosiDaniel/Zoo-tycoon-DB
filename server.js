const express = require("express")
const cors = require("cors")
require("dotenv").config()
const dbHandler = require("./dbHandler")
const router = require("./router")

const Port = process.env.PORT 
const server = express()

server.use(cors())

server.use(express.json())
server.use(express.static("public"))

server.use(router)

server.listen(Port, () => console.log("A szerver a követező porton fut: " + Port))
as