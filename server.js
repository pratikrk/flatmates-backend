require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.use(express.json())

app.use('/api/routes/', routes);

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        console.log("Connection establish with database.");
        app.listen(process.env.PORT, () => {
            console.log("Listening on port 4000");
        });
    })
    .catch((error) => {
        console.log(error);
    });
