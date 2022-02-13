const express = require('express')
const indexRoute = require('./routes/indexRoute')
const usersRoute = require('./routes/usersRoute')
const ejslayouts = require('express-ejs-layouts')

const app = express()

//ejs
app.use(ejslayouts)
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 5000

//routes
app.use(usersRoute)
app.use(indexRoute)

//port
app.listen(PORT , console.log(`server listening to port ${PORT} `))