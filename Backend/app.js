const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const api_routes = require('./routes/api_routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/app', api_routes)

mongoose.connect('mongodb://Aditya:htdx8584@cluster0-shard-00-00.elrpk.mongodb.net:27017,cluster0-shard-00-01.elrpk.mongodb.net:27017,cluster0-shard-00-02.elrpk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-t0tuu1-shard-0&authSource=admin&retryWrites=true&w=majority').then(() => {
        app.listen(4000)
        console.log('Listening on port 4000')
    })
    .catch(err => {
        console.log('Not connected to database')
    })