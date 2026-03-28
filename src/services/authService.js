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

const createAdmin = async () => {
    const admin = await User.findOne({ email: "admin@gmail.com" });

    if (!admin) {
        const hash = await bcrypt.hash("123456", 10);

        await User.create({
            name: "Admin",
            email: "admin@gmail.com",
            password: hash,
            role: "admin"
        });

        console.log("Admin created");
    }
};

module.exports = { register, login, createAdmin };