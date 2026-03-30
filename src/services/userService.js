const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
// import db  from ""
// GET ALL (admindb)
const getAllUsers = async () => {
    return await User.find().select('-password');
};

// GET BY ID
const getUserById = async (id) => {
    return await User.findById(id).select('-password');
};

// UPDATE
const updateUser = async (id, data) => {
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }

    return await User.findByIdAndUpdate(id, data, { new: true }).select('-password');
};

// DELETE
const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

// ADMIN CREATE STAFF
const createStaff = async (data) => {
    const { name, email, password } = data;

    const existing = await User.findOne({ email });
    if (existing) throw new Error("Email exists");

    const hash = await bcrypt.hash(password, 10);

    return await User.create({
        name,
        email,
        password: hash,
        role: 'staff'
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createStaff
};