const { urlencoded } = require('express');

require('dotenv').config();
const express = require('express'),
    app = express(),
    port = process.env.PORT,
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

app.use(cookieParser());
app.use(cors({credentials:true,origin: 'http://localhost:3000'}));
app.use(express.json(),urlencoded({extended:true}));


require('./server/config/database.config');
require('./server/routes/auth.routes')(app);