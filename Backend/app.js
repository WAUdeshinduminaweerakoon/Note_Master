require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoutes");
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());
// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Routes

app.use("/user", userRoutes);
app.use("/note", noteRoutes);

module.exports = app;
