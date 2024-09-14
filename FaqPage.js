// src/pages/FaqPage.js
import React from 'react';
import styled from 'styled-components';
import appleImage from '../assets/apple.jpg'; // Sample image for "What fruits are included?"
import healthImage from '../assets/health-benefits.jpg'; // Sample image for health benefits
import chatbotImage from '../assets/chatbot-image.jpg'; // Sample image for chatbot
import recipeImage from '../assets/recipe.jpg'; // Sample image for recipes

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
`;

const Title = styled.h1`
    text-align: center; /* Center the title */
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #4caf50;
`;

const FaqGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two items per row */
    gap: 20px; /* Space between grid items */

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* Stack items in a single column on small screens */
    }
`;

const FAQItem = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex; /* Use flexbox for better layout */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center align the content */
`;

const Question = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px; /* Space below the question */
    text-align: center; /* Center align the question */
`;

const Answer = styled.p`
    margin: 10px 0;
    line-height: 1.6; /* Improve readability */
    text-align: center; /* Center align the answer */
`;

const Image = styled.img`
    width: 100%;
    max-width: 150px; /* Limit image width */
    border-radius: 8px;
    margin: 10px 0; /* Space between image and text */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow effect */
    transition: transform 0.2s; /* Smooth transition for hover effect */

    &:hover {
        transform: scale(1.05); /* Scale up on hover for an interactive effect */
    }
`;

const FaqPage = () => {
    return (
        <Container>
            <Title>Frequently Asked Questions</Title>
            <FaqGrid>
                <FAQItem>
                    <Question>What fruits are included in the Fruit.ai application?</Question>
                    <Image src={appleImage} alt="Assorted fruits" />
                    <Answer>
                        The Fruit.ai application includes a variety of fruits such as apples, bananas, oranges, and many more.
                        You can explore detailed information about each fruit's nutritional value and health benefits.
                    </Answer>
                </FAQItem>

                <FAQItem>
                    <Question>What are the health benefits of fruits?</Question>
                    <Image src={healthImage} alt="Health benefits" />
                    <Answer>
                        Fruits are rich in vitamins, minerals, and antioxidants. They help improve digestion, boost immunity, 
                        and are essential for overall health. Each fruit has unique health benefits, which you can explore in our app.
                    </Answer>
                </FAQItem>

                <FAQItem>
                    <Question>How can the chatbot assist me?</Question>
                    <Image src={chatbotImage} alt="Chatbot" />
                    <Answer>
                        Our chatbot is designed to provide instant support, answer questions about fruits, 
                        suggest recipes, and offer health tips tailored to your dietary needs.
                    </Answer>
                </FAQItem>

                <FAQItem>
                    <Question>Can I find fruit-based recipes in the app?</Question>
                    <Image src={recipeImage} alt="Fruit recipes" />
                    <Answer>
                        Yes, the Fruit.ai application includes a section for delicious fruit-based recipes that you can try at home.
                        You can filter recipes based on your favorite fruits and dietary preferences.
                    </Answer>
                </FAQItem>
            </FaqGrid>
        </Container>
    );
};

export default FaqPage;
