// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import chatbotImage from '../assets/chatbot.jpg';
import translatorImage from '../assets/translator.jpg';
import faqImage from '../assets/faq.jpg';
import otherServiceImage from '../assets/other-service.jpg';
import heroImage from '../assets/hero.jpg';
import appleImage from '../assets/apple.jpg';
import bananaImage from '../assets/banana.jpg';
import orangeImage from '../assets/orange.jpg';
import grapeImage from '../assets/grapes.jpg';

const Container = styled.div`
    padding: 20px;
    text-align: center; /* Center-align the text */
`;

const HeroSection = styled.div`
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const HeroTitle = styled.h1`
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-weight: bold; /* Set font weight to bold */
    margin: 0; /* Optional: Remove default margin for better alignment */
`;


const AboutSection = styled.div`
    margin: 20px 0;
`;

const AboutTitle = styled.h2`
    margin: 10px 0;
`;

const AboutDescription = styled.p`
    max-width: 600px;
    margin: auto;
    line-height: 1.6; /* Improve readability */
    color: #555; /* Subtle text color */
`;

const FeaturedFruitsSection = styled.div`
    margin: 20px 0;
    text-align: center; /* Center-align the section title */
`;

const FeaturedFruitCard = styled.div`
    display: inline-block;
    margin: 15px; /* Space between cards */
    text-align: center;
    background-color: #fdfdfd; /* Light background for cards */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for card */
    transition: transform 0.3s, box-shadow 0.3s; /* Transition effects */
    padding: 50px; /* Padding inside card */
    width: 180px; /* Fixed width for consistency */
    
    &:hover {
        transform: translateY(-5px); /* Lift effect on hover */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Increased shadow on hover */
    }
`;

const FeaturedFruitImage = styled.img`
    width: 100%; /* Make image fill the card */
    height: 150px; /* Fixed height for uniformity */
    object-fit: cover; /* Ensure the image covers the area */
    border-radius: 8px;
    margin-bottom: 10px; /* Space below image */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Shadow for image */
`;

const FeaturedFruitName = styled.p`
    font-weight: bold;
    margin: 5px 0; /* Space between name and description */
    font-size: 1.1rem; /* Increase font size for visibility */
    color: #333; /* Dark color for text */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
`;

const FeaturedFruitDescription = styled.p`
    font-size: 1rem; /* Smaller font for description */
    color: #7f8c8d;; /* Subtle text color */
    line-height: 1.6; /* Improve readability */
    margin: 0; /* Remove margin for tighter spacing */
`;

const TestimonialsSection = styled.div`
    margin: 20px 0;
`;

const Testimonial = styled.p`
    font-style: italic;
    color: #333;
    margin: 10px 0;
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 100px; /* Adjusted space between items */
    margin-top: 20px; /* Space above services */
`;

const ServiceCard = styled(Link)`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    text-decoration: none; /* Remove underline from links */
    color: inherit; /* Inherit text color */

    &:hover {
        transform: scale(1.05); /* Slight zoom effect on hover */
    }
`;

const ServiceImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const ServiceName = styled.h2`
    margin-top: 10px;
    font-size: 18px;
    color: #333;
`;

const HomePage = () => {
    return (
        <Container>
            <HeroSection>
                <HeroTitle>Welcome to Fruit.ai</HeroTitle>
            </HeroSection>
            <AboutSection>
                <AboutTitle>About Us</AboutTitle>
                <AboutDescription>
                    At Fruit.ai, we strive to empower individuals to lead healthier lives by providing personalized fruit recommendations, health tips, and resources.
                </AboutDescription>
            </AboutSection>
            <FeaturedFruitsSection>
                <h2>Featured Fruits</h2>
                <FeaturedFruitCard>
                    <FeaturedFruitImage src={appleImage} alt="Apple" />
                    <FeaturedFruitName>Apple</FeaturedFruitName>
                    <FeaturedFruitDescription>A delicious and nutritious fruit.</FeaturedFruitDescription>
                </FeaturedFruitCard>
                <FeaturedFruitCard>
                    <FeaturedFruitImage src={bananaImage} alt="Banana" />
                    <FeaturedFruitName>Banana</FeaturedFruitName>
                    <FeaturedFruitDescription>A great source of energy.</FeaturedFruitDescription>
                </FeaturedFruitCard>
                <FeaturedFruitCard>
                    <FeaturedFruitImage src={orangeImage} alt="Orange" />
                    <FeaturedFruitName>Orange</FeaturedFruitName>
                    <FeaturedFruitDescription>Rich in Vitamin C.</FeaturedFruitDescription>
                </FeaturedFruitCard>
                <FeaturedFruitCard>
                    <FeaturedFruitImage src={grapeImage} alt="Grapes" />
                    <FeaturedFruitName>Grapes</FeaturedFruitName>
                    <FeaturedFruitDescription>A tasty snack for any time.</FeaturedFruitDescription>
                </FeaturedFruitCard>
            </FeaturedFruitsSection>
            <TestimonialsSection>
                <h2>Our Services</h2>
                <Testimonial>
                    "Fruit.ai helped me discover new fruits and improve my health!" - User A
                </Testimonial>
                <Testimonial>
                    "I love the chatbot feature! It’s so helpful!" - User B
                </Testimonial>
            </TestimonialsSection>
            <ServicesGrid>
                <ServiceCard to="/chatbot">
                    <ServiceImage src={chatbotImage} alt="Chatbot Service" />
                    <ServiceName>Chatbot</ServiceName>
                </ServiceCard>
                <ServiceCard to="/translator">
                    <ServiceImage src={translatorImage} alt="Translator Service" />
                    <ServiceName>Translator</ServiceName>
                </ServiceCard>
                <ServiceCard to="/faqs">
                    <ServiceImage src={faqImage} alt="FAQs Service" />
                    <ServiceName>FAQs</ServiceName>
                </ServiceCard>
                <ServiceCard to="/about">
                    <ServiceImage src={otherServiceImage} alt="Other Service" />
                    <ServiceName>Other Service</ServiceName>
                </ServiceCard>
            </ServicesGrid>
        </Container>
    );
};

export default HomePage;
