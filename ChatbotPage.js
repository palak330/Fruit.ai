// src/pages/ChatbotPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    text-align: center;
    max-width: 800px;
    margin: auto; /* Center the content */
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 2.5rem; /* Larger title */
    color: #4caf50; /* Match your theme color */
`;

const Description = styled.p`
    margin-bottom: 15px;
    line-height: 1.6; /* Improve readability */
    color: #555; /* Subtle text color */
`;

const FeaturesList = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: left; /* Align the text to the left for better readability */
`;

const FeatureItem = styled.li`
    margin: 10px 0;
    font-size: 1.1rem; /* Slightly larger font for features */
`;

const ChatContainer = styled.div`
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    height: 300px;
    overflow-y: auto; /* Enable scrolling if chat exceeds height */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align messages to the left */
`;

const Message = styled.div`
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => (props.isUser ? '#4caf50' : '#f1f1f1')}; /* Different background for user and bot messages */
    color: ${props => (props.isUser ? 'white' : 'black')};
    align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')}; /* Align messages */
    max-width: 70%; /* Limit the width of messages */
`;

const InputContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const Input = styled.input`
    flex: 1; /* Take remaining space */
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const Button = styled.button`
    margin-left: 10px;
    padding: 10px 20px;
    background-color: #4caf50; /* Button color matching theme */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049; /* Darker green on hover */
    }
`;

const ChatbotPage = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isChatting, setIsChatting] = useState(false);

    const handleSend = () => {
        if (inputValue.trim() === '') return; // Don't send empty messages

        // Add user's message to the chat
        setMessages(prevMessages => [...prevMessages, { text: inputValue, isUser: true }]);

        // Simulate bot response
        const botResponse = `Bot: You said "${inputValue}"`; // This can be replaced with actual bot logic
        setMessages(prevMessages => [...prevMessages, { text: botResponse, isUser: false }]);
        
        // Clear input field
        setInputValue('');
    };

    const handleStartChatting = () => {
        setIsChatting(true);
    };

    return (
        <Container>
            <Title>Chatbot</Title>
            <Description>
                Welcome to the Fruit.ai Chatbot! Our chatbot is here to assist you with your health management journey.
                You can ask questions, get personalized recommendations, and receive health-related advice.
            </Description>
            <Description>
                <strong>Features:</strong>
            </Description>
            <FeaturesList>
                <FeatureItem>💬 Engage in natural conversations to get quick answers to your queries.</FeatureItem>
                <FeatureItem>🍎 Receive personalized recommendations based on your dietary preferences.</FeatureItem>
                <FeatureItem>📊 Track your health metrics and receive tailored advice.</FeatureItem>
                <FeatureItem>🕒 Available 24/7 for instant support whenever you need it.</FeatureItem>
                <FeatureItem>📚 Access information about various fruits and their health benefits.</FeatureItem>
            </FeaturesList>
            <Description>
                To interact with the chatbot, simply type your question or request in the chat input box and hit Enter.
                Start a conversation and explore the many ways we can help you on your health journey!
            </Description>
            {!isChatting ? (
                <Button onClick={handleStartChatting}>Start Chatting Now</Button>
            ) : (
                <ChatContainer>
                    {messages.map((msg, index) => (
                        <Message key={index} isUser={msg.isUser}>
                            {msg.text}
                        </Message>
                    ))}
                </ChatContainer>
            )}
            {isChatting && (
                <InputContainer>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <Button onClick={handleSend}>Send</Button>
                </InputContainer>
            )}
        </Container>
    );
};

export default ChatbotPage;
