// src/components/FruitCard.js
import React from 'react';

const FruitCard = ({ fruit }) => {
    return (
        <div className="fruit-card">
            <h3>{fruit.name}</h3>
            <img src={fruit.image} alt={fruit.name} />
            <p>{fruit.description}</p>
        </div>
    );
};

export default FruitCard;

