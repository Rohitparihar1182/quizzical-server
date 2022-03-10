// imports
const express = require('express');
const cors = require('cors');
const getUrl = require('./utils/getUrl');
require('dotenv').config();

// variable...
const PORT = process.env.PORT || 3500;
const app = express();
app.use(express.json())
app.use(cors());

app.post('/geturl', getUrl)

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))