// backend/models/Faq.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

const Faq = mongoose.model('Faq', faqSchema);
module.exports = Faq;
