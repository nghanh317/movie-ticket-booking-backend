// require('dotenv').config()

// const express = require('express')
// const cors = require('cors')
// const path = require('path')

// const viewEngine = require('./config/viewEngine')
// const router = require('./routes/web')
// const authRoutes = require('./routes/authRoute')
// const connectDB = require('./config/db')

// const { clerkMiddleware } = require('@clerk/express')
// const { serve } = require("inngest/express");
// const { inngest, functions } = require("./inngest/index")

// const app = express()
// const port = process.env.PORT || 8083
// const hostname = process.env.HOST_NAME || 'localhost'

// //config engine view
// viewEngine(app);
// connectDB();

// //midlleware
// app.use(express.json());
// app.use(cors());
// app.use(clerkMiddleware());

// //khai bao route
// app.use('/TicketBooking', router);
// app.use('/api/auth', authRoutes);
// app.use('/api/inngest', serve({ client: inngest, functions }));


// app.listen(port, hostname, () => {
//   console.log(`Example app listening on port ${port}`)
// })
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');

const app = express();
const port = process.env.PORT || 8083
const hostname = process.env.HOST_NAME || 'localhost'

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

const startServer = async () => {
    await connectDB();

    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${port}`)
    });
};

startServer();