const User = require('../models/user');


exports.users = async (req, res) => {
    try {
        const users = await User.find({});

        res.json(users);
    } catch (e) {
        res.status(500).json({ error: e.massage });
    }
};

exports.create_user = async (req, res) => {
    try {
        const { firstName, lastName, phoneNo } = req.body;

    let newUser = new User({
        firstName,
        lastName,
        phoneNo,    
    });
    newUser = await newUser.save();

    res.json(newUser);
    } catch (e) {
        res.status(500).json({error: e.massage});
    }
};