// src/pages/TranslatorPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
    text-align: center; /* Center the content */
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 2.5rem; /* Larger title */
    color: #4caf50; /* Match your theme color */
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none; /* Disable resizing */
`;

const SelectContainer = styled.div`
    display: flex;
    justify-content: center; /* Center the select dropdowns */
    margin-bottom: 20px; /* Space below the dropdowns */
`;

const Select = styled.select`
    margin: 0 10px; /* Space between dropdowns */
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const Button = styled.button`
    margin: 10px; /* Margin for spacing */
    padding: 10px 20px;
    background-color: #4caf50; /* Button color matching theme */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #45a049; /* Darker green on hover */
    }
`;

const OutputArea = styled.div`
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9; /* Light background for output */
`;

const TranslatorPage = () => {
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = () => {
        // Placeholder for translation logic
        const translation = `${text} (translated from ${sourceLanguage} to ${targetLanguage})`;
        setTranslatedText(translation);
    };

    const handleClear = () => {
        setText('');
        setTranslatedText('');
        setSourceLanguage('en');
        setTargetLanguage('es');
    };

    return (
        <Container>
            <Title>Translator</Title>
            <TextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate"
            />
            <SelectContainer>
                <Select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    {/* Add more languages as needed */}
                </Select>
                <Select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                    <option value="es">Spanish</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    {/* Add more languages as needed */}
                </Select>
            </SelectContainer>
            <Button onClick={handleTranslate}>Translate</Button>
            <Button onClick={handleClear}>Clear</Button>
            <OutputArea>
                <h2>Translated Text:</h2>
                <p>{translatedText}</p>
            </OutputArea>
        </Container>
    );
};

export default TranslatorPage;
