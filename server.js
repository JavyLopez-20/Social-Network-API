const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(process.env.MONGO_URI, () => {
    console.log(`MONGO_DB is connected`)
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});