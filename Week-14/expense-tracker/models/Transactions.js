const mongoose = require('mongoose')


const TransactionsSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'please add some positive or negative number']
    },
    createAt: {
        type:Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Transactions', TransactionsSchema)