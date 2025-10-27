import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';


export default function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="main">
                <h1 style={{ marginBottom: 18 }}>Welcome — Example page</h1>
                <Card title="Beautiful SVG" body="This card imports and displays an image file located at src/assets/card-image.svg" />
            </main>
            <Footer />
        </div>
    );
}