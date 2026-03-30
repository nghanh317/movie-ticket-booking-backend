const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true }, // Tính bằng phút
    release_date: { type: Date, required: true },
    end_date: { type: Date },
    poster: { type: String }, // Link ảnh
    trailer: { type: String }, // Link YouTube
    age_limit: { type: Number, default: 0 }, // 0 là mọi lứa tuổi, 13, 16, 18
    status: { 
        type: String, 
        enum: ['coming_soon', 'showing', 'ended'], 
        default: 'coming_soon' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);