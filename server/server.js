const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require('cloudinary').v2;


const dotenv = require('dotenv').config()


const MONGO_URI = process.env.MONGO_URI;
const PORT = 5050 || process.env.CLIENT_PORT_ID;

app.use(cors())


// Database configuration
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb!");
});
mongoose.connection.on("error", (err) => {
  console.log("ERROR! Cannot connect to database ", err);
});

// Database Schema
require("./models/user");
require("./models/post");


app.use(express.json());

// React Router
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));
app.use(require("./routes/settings"))

app.listen(PORT, () => {
  console.log(`Server is listening at: http://localhost:${PORT}/`);
});
