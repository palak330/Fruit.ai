// src/services/api.js
import axios from 'axios';

// Set the base API URL here
const API_URL = 'http://localhost:5000/faqs'; // Update with your backend URL

export const getFaqs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        throw error; // Re-throw error for further handling
    }
};

export const createFaq = async (faq) => {
    try {
        const response = await axios.post(API_URL, faq);
        return response.data;
    } catch (error) {
        console.error('Error creating FAQ:', error);
        throw error; // Re-throw error for further handling
    }
};

export const updateFaq = async (id, updatedFaq) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedFaq);
        return response.data;
    } catch (error) {
        console.error('Error updating FAQ:', error);
        throw error; // Re-throw error for further handling
    }
};

export const deleteFaq = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting FAQ:', error);
        throw error; // Re-throw error for further handling
    }
};
