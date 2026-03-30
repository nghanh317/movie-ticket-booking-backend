const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    booking_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Booking',
        required: true
    },
    method: { type: String, required: true }, // VD: 'Momo', 'VNPay', 'Cash'
    transaction_id: { type: String }, // Mã giao dịch từ cổng thanh toán trả về
    status: { 
        type: String, 
        enum: ['pending', 'success', 'failed'], 
        default: 'pending' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);