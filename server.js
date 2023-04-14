require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const app = express();

app.use(express.json())

app.use('/api/routes/', routes);

app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000");
});