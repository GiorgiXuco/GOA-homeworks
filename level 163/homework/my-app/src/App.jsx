import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>მთავარი</Link>
      <Link to="/about" style={styles.link}>ჩვენს შესახებ</Link>
      <Link to="/contact" style={styles.link}>კონტაქტი</Link>
    </nav>
  );
}


function Home() {
  return <h2 style={styles.page}>მთავარი გვერდი</h2>;
}

function About() {
  return <h2 style={styles.page}>ჩვენს შესახებ</h2>;
}

function Contact() {
  return <h2 style={styles.page}>კონტაქტის გვერდი</h2>;
}


function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <h1 style={styles.title}>React Router 🌐 მაგალითი</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
    marginTop: "20px",
  },
  title: {
    color: "#333",
  },
  navbar: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    marginBottom: "20px",
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
  page: {
    fontSize: "1.5rem",
  },
};

export default App;

