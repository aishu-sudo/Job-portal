// models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    proposalText: { type: String, required: true },
    bidAmount: { type: Number, required: true },
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);