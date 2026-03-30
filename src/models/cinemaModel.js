const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
    name: String,
    address: String,
    hotline: { type: String },
    status: { 
        type: String, 
        enum: ['open', 'closed', 'maintenance'], 
        default: 'open' 
    }
}, { timestamps: true });


module.exports = mongoose.model('Cinema', cinemaSchema);