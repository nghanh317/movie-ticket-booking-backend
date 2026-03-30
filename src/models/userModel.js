const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { 
        type: String, 
        enum: ['user', 'staff', 'admin'], 
        default: 'user' 
    },
    points: { type: Number, default: 0 }, // Điểm tích lũy
    otp: {
        code: String,
        exp: Date
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);