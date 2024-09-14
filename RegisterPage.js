import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f8ff;
`;

const FormContainer = styled.div`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 400px;
`;

const Title = styled.h1`
    margin-bottom: 10px;
    text-align: center;
`;

const Subtitle = styled.p`
    text-align: center;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;

    &:focus {
        border-color: #4caf50;
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #45a049;
    }
`;

const RegisterPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Add registration logic here (e.g., API call)
        if (password === confirmPassword) {
            alert('Registration successful!');
            navigate('/login');
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <Container>
            <FormContainer>
                <Title>Register</Title>
                <Subtitle>Create an account to get started.</Subtitle>
                <form onSubmit={handleRegister}>
                    <Input
                        type="email"
                        placeholder="Email Address"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">Register</Button>
                </form>
            </FormContainer>
        </Container>
    );
};

export default RegisterPage;
