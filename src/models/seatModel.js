const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    room_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Room',
        required: true
    },
    row: { type: String, required: true }, // VD: 'A', 'B'
    number: { type: Number, required: true }, // VD: 1, 2
    seat_type: { 
        type: String, 
        enum: ['normal', 'vip', 'couple'], 
        default: 'normal' 
    },
    status: { 
        type: String, 
        enum: ['active', 'maintenance'], 
        default: 'active' 
    }
});

module.exports = mongoose.model('Seat', seatSchema);