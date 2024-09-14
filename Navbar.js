// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.jpg'; // Import your logo image

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between; /* Space between logo and menu */
    align-items: center; /* Center items vertically */
    padding: 20px;
    background-color: #4caf50; /* Background color of the navbar */
    position: relative; /* Position relative for absolute children */
`;

const Logo = styled.img`
    width: 50px; /* Adjusted logo size for better visibility */
    height: auto;
    margin-right: 20px; /* Space between logo and text/menu */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    transition: transform 0.2s; /* Transition for hover effect */

    &:hover {
        transform: scale(1.05); /* Slight zoom effect on hover */
    }
`;


const NavbarList = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Show or hide on mobile */
        flex-direction: column; /* Stack items vertically */
        position: absolute;
        top: 60px; /* Position below the navbar */
        right: 0; /* Align to the right */
        background-color: #4caf50; /* Background color for dropdown */
        width: 100%; /* Full width */
    }
`;

const NavbarItem = styled.li`
    margin-left: 20px; /* Space between links */
    @media (max-width: 768px) {
        margin: 10px 0; /* Space between items when stacked */
        margin-left: 0; /* Reset margin on mobile */
        text-align: center; /* Center align text */
    }
`;

const NavbarLink = styled(Link)`
    text-decoration: none;
    color: white; /* Link color */
    font-weight: bold;

    &:hover {
        text-decoration: underline; /* Underline on hover */
    }
`;

const MenuToggle = styled.div`
    display: none; /* Hide by default */
    flex-direction: column;
    cursor: pointer;

    div {
        height: 3px;
        width: 25px;
        background-color: white;
        margin: 4px 0;
    }

    @media (max-width: 768px) {
        display: flex; /* Show hamburger menu on mobile */
    }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track menu toggle

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <NavbarContainer>
            <Link to="/home">
                <Logo src={logo} alt="Fruit.ai Logo" /> {/* Logo on the left */}
            </Link>
            <MenuToggle onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </MenuToggle>
            <NavbarList isOpen={isOpen}>
                <NavbarItem><NavbarLink to="/home" onClick={closeMenu}>Home</NavbarLink></NavbarItem>
                <NavbarItem><NavbarLink to="/chatbot" onClick={closeMenu}>Chatbot</NavbarLink></NavbarItem>
                <NavbarItem><NavbarLink to="/translator" onClick={closeMenu}>Translator</NavbarLink></NavbarItem>
                <NavbarItem><NavbarLink to="/faqs" onClick={closeMenu}>FAQs</NavbarLink></NavbarItem>
                <NavbarItem><NavbarLink to="/about" onClick={closeMenu}>About</NavbarLink></NavbarItem>
            </NavbarList>
        </NavbarContainer>
    );
};

export default Navbar;
