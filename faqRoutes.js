// backend/routes/faqRoutes.js
const express = require('express');
const router = express.Router();
const Faq = require('../models/Faq');

// GET all FAQs
router.get('/', async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new FAQ
router.post('/', async (req, res) => {
    const { question, answer } = req.body;
    const newFaq = new Faq({ question, answer });
    try {
        const savedFaq = await newFaq.save();
        res.status(201).json(savedFaq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update an FAQ by ID
router.put('/:id', async (req, res) => {
    const { question, answer } = req.body;
    try {
        const updatedFaq = await Faq.findByIdAndUpdate(
            req.params.id,
            { question, answer },
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        if (!updatedFaq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        res.json(updatedFaq);
    } catch (error) {
        res.status(400).json({ message: 'Invalid request', error: error.message });
    }
});

// DELETE an FAQ by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedFaq = await Faq.findByIdAndDelete(req.params.id);

        if (!deletedFaq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        res.json({ message: 'FAQ deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
