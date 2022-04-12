const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const jwt = require("jsonwebtoken");

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

require('./server/config/mongoose.config')

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./server/routes/llama.routes')(app);

server.listen(8000, () =>
   console.log("The server is running on port 8000.")
);