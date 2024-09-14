// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const faqRoutes = require('./routes/faqRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/faqs', faqRoutes);

// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Fruit.ai API!'); // Simple message for root
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
