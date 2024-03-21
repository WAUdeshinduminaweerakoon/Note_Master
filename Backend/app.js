const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://udeshidumina:udesh123@cluster0.4jg3pk6.mongodb.net/Note_Master", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("Connected to DB");
    } else {
        console.log("Error connecting to DB:", err);
    }
});

// Routes
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
