// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for routing
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaFingerprint, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons

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
    margin-bottom: 20px;
`;

const Disclaimer = styled.p`
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
`;

const InputContainer = styled.div`
    position: relative;
    margin: 10px 0;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    padding-left: 40px; /* Space for the icon */
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Prevent overflow from padding */
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

const LinkText = styled.p`
    margin: 10px 0;
    font-size: 14px;
`;

const SocialButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const SocialButton = styled.a` /* Changed to anchor for linking */
    flex: 1;
    margin: 0 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }
`;

const BiometricIcon = styled.div`
    margin-top: 20px;
    cursor: pointer;
    color: #4caf50;
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

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy credentials
        if (email === 'abc@gmail.com' && password === 'password') {
            if (rememberMe) {
                // Logic to remember user (e.g., save to local storage)
            }
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Container>
            <FormContainer>
                <Title>Login</Title>
                <Disclaimer>By signing in, you are agreeing to our Terms and Privacy Policy.</Disclaimer>
                <form onSubmit={handleLogin}>
                    {/* Email Input with Icon */}
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

                    {/* Password Input with Icon and Eye Toggle */}
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
                            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between open and closed eye */}
                        </EyeIcon>
                    </InputContainer>

                    {/* Remember Me Checkbox */}
                    <CheckboxContainer>
                        <Checkbox
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label>Remember Me</label>
                    </CheckboxContainer>

                    <Button type="submit">Login</Button>

                    <LinkText>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </LinkText>
                </form>

                <LinkText>Or connect with</LinkText>

                {/* Social Buttons with Icons */}
                <SocialButtons>
                    <SocialButton href="#" style={{ backgroundColor: '#3b5998' }}>
                        <FaFacebook size={20} style={{ marginRight: 5 }} /> {/* Facebook Icon */}
                    </SocialButton>
                    <SocialButton href="#" style={{ backgroundColor: '#0077b5' }}>
                        <FaLinkedin size={20} style={{ marginRight: 5 }} /> {/* LinkedIn Icon */}
                    </SocialButton>
                    <SocialButton href="#" style={{ backgroundColor: '#E1306C' }}>
                        <FaInstagram size={20} style={{ marginRight: 5 }} /> {/* Instagram Icon */}
                    </SocialButton>
                    <SocialButton href="#" style={{ backgroundColor: '#1DA1F2' }}>
                        <FaTwitter size={20} style={{ marginRight: 5 }} /> {/* Twitter Icon */}
                    </SocialButton>
                </SocialButtons>

                {/* Biometric Icon */}
                <BiometricIcon>
                    <FaFingerprint size={40} />
                </BiometricIcon>

                <LinkText>
                    Don't have an account? <Link to="/register">Register</Link>
                </LinkText>
            </FormContainer>
        </Container>
    );
};

export default LoginPage;
