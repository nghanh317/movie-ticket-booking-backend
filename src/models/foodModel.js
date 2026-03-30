const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true }, // VD: Combo 1 Bắp 2 Nước
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    status: { 
        type: String, 
        enum: ['available', 'out_of_stock'], 
        default: 'available' 
    }
});

module.exports = mongoose.model('Food', foodSchema);