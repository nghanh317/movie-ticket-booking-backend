const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    cinema_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cinema',
        required: true
    },
    name: { type: String, required: true }, // VD: Phòng 1, Phòng IMAX
    total_seat: { type: Number, required: true },
    room_type: { 
        type: String, 
        enum: ['2D', '3D', 'IMAX'], 
        default: '2D' 
    }
}, { timestamps: true });
module.exports = mongoose.model('Room', roomSchema);