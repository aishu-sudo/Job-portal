// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    skills: { type: [String], required: true }, // example: ['React', 'Node.js']
    language: { type: String, required: true },
    budget: { type: Number, required: true },
    isTopRated: { type: Boolean, default: false },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);