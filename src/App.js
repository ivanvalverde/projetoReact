import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';

function App() {
  
  return (
    <div className="App grid">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
