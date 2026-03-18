const express = require('express')
require('dotenv').config()
const path = require('path')
const viewEngine = require('./config/viewEngine')
const router = require('./routes/web')
const app = express()
const port = process.env.PORT || 8083
const hostname = process.env.HOST_NAME || 'localhost'

//config engine view
viewEngine(app);

//khai bao route
app.use('/TicketBooking', router);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})