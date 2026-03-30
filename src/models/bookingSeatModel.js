const mongoose = require('mongoose');

const bookingSeatSchema = new mongoose.Schema({
    booking_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Booking',
        required: true
    },
    seat_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Seat',
        required: true
    },
    price: { type: Number, required: true } // Giá vé tại thời điểm mua
});

module.exports = mongoose.model('BookingSeat', bookingSeatSchema);