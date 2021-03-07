const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port 5000`)
})