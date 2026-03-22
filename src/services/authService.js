const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};

const register = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("Email exists");

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hash,
        role: 'user'
    });

    return user;
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Wrong password");

    const token = generateToken(user);

    return { user, token };
};

module.exports = { register, login };