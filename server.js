require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
const session = require('express-session');


app.use(cors());

app.use(express.json())

app.use('/api/routes/', routes);

// app.use(session({
//     secret: 'secret',
//     cookie: {maxAge: 60000},
//     resave: false,
//     rolling: false,
//     saveUninitialized: true
// }));

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


