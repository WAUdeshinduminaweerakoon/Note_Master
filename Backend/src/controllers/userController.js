const UserModel = require("../models/userModel");

exports.createUser = async (req, res) => {
    try {
        const email = req.body.email;
        const existingUser = await UserModel.findOne({ email: email });
        if (existingUser) {
            return res.status(401).json({ message: "User with this email already exists" });

        }

        const newUser = new UserModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: email,
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
//        console.log(email)
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            //return true;
        }
// password match
        if(user.password === req.body.password){
            res.json({message:"Password is correct"});
        }else{
            res.status(401).json({ message: "Incorrect password" });
        }
//        else {
////            console.log(user)
//            res.json(user.password);
//            console.log(user.password)
//            //return false;
//        }
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

exports.userSignIn = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Incorrect password" });
        }


        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};