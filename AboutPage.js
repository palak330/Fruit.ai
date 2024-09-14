// src/pages/AboutPage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    text-align: center;
    max-width: 800px;
    margin: auto; /* Center the content */
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const Section = styled.p`
    margin-bottom: 15px;
    line-height: 1.6; /* Improve readability */
`;

const Highlight = styled.span`
    font-weight: bold;
`;

const AboutPage = () => {
    return (
        <Container>
            <Title>About Fruit.ai</Title>
            <Section>
                Welcome to <Highlight>Fruit.ai</Highlight>, your personal health manager! Our application is designed to help you track your health and wellness journey with ease. 
                Whether you're looking to manage your nutrition, monitor your fitness, or access helpful resources, Fruit.ai is here to assist you.
            </Section>
            <Section>
                Our mission is to empower individuals to take charge of their health by providing easy access to tools and information that promote well-being and a balanced lifestyle.
            </Section>
            <Section>
                <Highlight>Key Features:</Highlight>
                <ul style={{ textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
                    <li>Personalized Health Tracking</li>
                    <li>Comprehensive FAQs</li>
                    <li>Interactive Chatbot</li>
                    <li>Community Support</li>
                </ul>
            </Section>
            <Section>
                Fruit.ai was developed by a dedicated team of health enthusiasts, developers, and designers who are passionate about making health management accessible and engaging for everyone.
            </Section>
            <Section>
                "Fruit.ai has transformed the way I manage my health. The tools are easy to use, and the chatbot always provides me with the information I need!" - <Highlight>Sarah J.</Highlight>
            </Section>
            <Section>
                Ready to take control of your health? Sign up today and start your journey towards a healthier lifestyle with Fruit.ai!
            </Section>
            <Section>
                Have questions? Feel free to contact us at <Highlight>support@fruit.ai</Highlight>.
            </Section>
        </Container>
    );
};

export default AboutPage;
