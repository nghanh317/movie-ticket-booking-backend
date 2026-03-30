const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    showtime_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Showtime',
        required: true
    },
    total_price: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'paid', 'cancelled'], 
        default: 'pending' 
    }
}, { timestamps: true }); // Có timestamps sẽ tự tạo field createdAt để biết thời gian đặt

module.exports = mongoose.model('Booking', bookingSchema);