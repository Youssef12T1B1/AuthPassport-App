const express = require('express')
const indexRoute = require('./routes/indexRoute')
const usersRoute = require('./routes/usersRoute')
const ejslayouts = require('express-ejs-layouts')
const mongoose = require ('mongoose');
const connectDb = require('./config/db')
const falsh = require('connect-flash')
const session = require('express-session')

connectDb()
const app = express()

//ejs
app.use(ejslayouts)
app.set('view engine', 'ejs')

const PORT = require('./config/keys').PORT || 5000

app.use(express.urlencoded({ extended: false}))

//session
app.use(session({
    secret : require('./config/keys').SEC,
    resave: true,
    saveUninitialized: true,
}))

//routes
app.use(usersRoute)
app.use(indexRoute)

//port
app.listen(PORT , console.log(`server listening to port ${PORT} `))