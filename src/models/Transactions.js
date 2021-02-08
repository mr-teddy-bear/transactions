import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Schema, model, Types } = pkg;

const schema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    currentMoney: { type: mongoose.Types.Decimal128, required: true },
    type: { type: String, required: true },
    sumOperation: { type: mongoose.Types.Decimal128, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

})

const Transactions = mongoose.model('Transactions', schema)

export default Transactions;