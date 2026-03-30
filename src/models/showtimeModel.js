const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    movie_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true
    },
    room_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Room',
        required: true
    },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    format: { type: String, default: '2D Phụ đề' } // VD: 3D Lồng tiếng
}, { timestamps: true });

module.exports = mongoose.model('Showtime', showtimeSchema);