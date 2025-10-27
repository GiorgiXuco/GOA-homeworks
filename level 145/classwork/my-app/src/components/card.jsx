import React from 'react';
import './Card.css';
import CardImage from '../assets/card-image.svg';


export default function Card({ title = 'Card title', body = 'This is a sample card. It contains an image imported from the project folder.' }) {
    return (
        <article className="card">
            <img src={CardImage} alt="Card" className="card-image" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{body}</p>
                <div className="card-actions">
                    <button className="btn">Action</button>
                </div>
            </div>
        </article>
    );
}