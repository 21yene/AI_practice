const express = require('express')
const app = express()

const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(express.static('Images'));
app.use(cookieParser());

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next()
});

const studentRoutes = require('./routes/studentRoutes');
const staffRoutes = require('./routes/staffRoutes');
const adminRoutes = require('./routes/adminRoutes');
const login = require('./routes/adminRoutes');

app.use('/api', login);
app.use('/api/student', studentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/admin', adminRoutes);


require("./realtime");
const port = 3000
const ip = 'localhost'
app.listen(port, ip);

console.log(`Server is listening to ${ip} on port ${port}`)
module.exports = app;
