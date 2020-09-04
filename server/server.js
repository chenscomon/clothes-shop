const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

app.use(cors);
app.use(bodyParser.json());
// app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/FashionShop', { useNewUrlParser: true, useUnifiedTopology: true }).then(conn => {
    app.listen(8080, () => {
        console.log('Backend is running and connected to the database');
    });
}).catch(err => {
    console.log(err);
});