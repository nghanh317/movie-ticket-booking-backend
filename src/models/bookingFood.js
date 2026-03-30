const mongoose = require('mongoose');

const bookingFoodSchema = new mongoose.Schema({
    booking_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Booking',
        required: true
    },
    food_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Food',
        required: true
    },
    quantity: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true } // Giá tại thời điểm mua
});

module.exports = mongoose.model('BookingFood', bookingFoodSchema);