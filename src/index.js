const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')

dotenv.config()

const app = express()

let connectionUri = encodeURI('mongodb+srv://' + process.env.MONGOUSER+ ':' + process.env.PASSWORD + '@cluster0.h2juh.gcp.mongodb.net/agenda?retryWrites=true&w=majority')

mongoose.connect(connectionUri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        app.listen(process.env.PORT)

        app.use(cors())
        app.use(express.json())
        app.use(routes)

        console.log("Listening on port: " + process.env.PORT)
    }).catch((error) => console.log(error))