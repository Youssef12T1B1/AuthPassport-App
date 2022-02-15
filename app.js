const express = require('express')
const indexRoute = require('./routes/indexRoute')
const usersRoute = require('./routes/usersRoute')
const ejslayouts = require('express-ejs-layouts')
const mongoose = require ('mongoose');
const connectDb = require('./config/db')
const falsh = require('connect-flash')
const session = require('express-session');
const flash = require('connect-flash/lib/flash');
const passport = require('passport');

connectDb()
const app = express()

// passport 
require('./config/passport')(passport)
//ejs
app.use(ejslayouts)
app.set('view engine', 'ejs')

const PORT = require('./config/.env').PORT || 5000

app.use(express.urlencoded({ extended: false}))

//session
app.use(session({
    secret : require('./config/.env').SEC,
    resave: true,
    saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())


app.use(flash())

app.use((req, res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})
 
//routes
app.use(usersRoute)
app.use(indexRoute)

//port
app.listen(PORT , console.log(`server listening to port ${PORT} `))