const UserModel = require("../models/userModel");

exports.createUser = async (req, res) => {
    try {
        const newUser = new UserModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json(data);

        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
