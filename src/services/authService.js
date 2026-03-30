const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (data) => {
    const { name, email, password } = data;

    if (!email || !password) {
        throw new Error("Missing input");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashPassword
    });

    return user;
};

const login = async (data) => {
    const { email, password } = data;

    if (!email || !password) {
        throw new Error("Missing input");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Wrong password");
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return {
        token,
        user
    };
};

module.exports = { register, login };