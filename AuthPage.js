// src/pages/AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaFingerprint } from 'react-icons/fa'; // Import icons

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #f2f2f2;
`;

const FormContainer = styled.div`
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

const Title = styled.h1`
    margin-bottom: 10px;
`;

const Subheading = styled.p`
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
`;

const TabContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    position: relative;
`;

const TabButton = styled.button`
    flex: 1;
    padding: 10px;
    background-color: transparent;
    color: ${props => (props.active ? 'black' : '#888')};
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;

    &:hover {
        color: black;
    }
`;

const Underline = styled.div`
    position: absolute;
    bottom: 0;
    left: ${props => (props.activeTab === 'login' ? '0%' : '50%')};
    width: 50%;
    height: 2px;
    background-color: #4caf50;
    transition: left 0.3s ease;
`;

const InputContainer = styled.div`
    position: relative;
    margin: 10px 0;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    padding-left: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;

const IconWrapper = styled.span`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #888;
`;

const EyeIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #888;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const SocialButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const SocialButton = styled.button`
    flex: 1;
    margin: 0 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;

const BiometricIcon = styled.div`
    margin-top: 20px;
    cursor: pointer;
    color: #4caf50;
`;

const OrConnectWith = styled.p`
    margin: 20px 0 10px;
    color: #888;
    font-weight: bold;
`;

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'abc@gmail.com' && password === 'palak') {
            if (rememberMe) {
                // Logic for remembering the user
            }
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Registration logic here
        navigate('/home');
    };

    return (
        <Container>
            <FormContainer>
                {/* Title and Subheading are placed above the login/register tabs */}
                <Title>Login / Register</Title>
                <Subheading>By signing in, you are agreeing to our terms and privacy policy.</Subheading>

                <TabContainer>
                    <TabButton
                        active={activeTab === 'login'}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </TabButton>
                    <TabButton
                        active={activeTab === 'register'}
                        onClick={() => setActiveTab('register')}
                    >
                        Register
                    </TabButton>
                    <Underline activeTab={activeTab} />
                </TabContainer>

                {/* Login Form */}
                {activeTab === 'login' && (
                    <form onSubmit={handleLogin}>
                        <InputContainer>
                            <IconWrapper>
                                <FaEnvelope />
                            </IconWrapper>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <IconWrapper>
                                <FaLock />
                            </IconWrapper>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </EyeIcon>
                        </InputContainer>
                        <CheckboxContainer>
                            <Checkbox
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label>Remember Me</label>
                        </CheckboxContainer>
                        <Button type="submit">Login</Button>
                    </form>
                )}

                {/* Register Form */}
                {activeTab === 'register' && (
                    <form onSubmit={handleRegister}>
                        <InputContainer>
                            <IconWrapper>
                                <FaEnvelope />
                            </IconWrapper>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <IconWrapper>
                                <FaLock />
                            </IconWrapper>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </EyeIcon>
                        </InputContainer>
                        <Button type="submit">Register</Button>
                    </form>
                )}

                <OrConnectWith>or connect with</OrConnectWith>
                <SocialButtons>
                    <SocialButton style={{ backgroundColor: '#3b5998' }}>Facebook</SocialButton>
                    <SocialButton style={{ backgroundColor: '#0077b5' }}>LinkedIn</SocialButton>
                    <SocialButton style={{ backgroundColor: '#E1306C' }}>Instagram</SocialButton>
                </SocialButtons>

                <BiometricIcon>
                    <FaFingerprint size={40} />
                </BiometricIcon>
            </FormContainer>
        </Container>
    );
};

export default AuthPage;
