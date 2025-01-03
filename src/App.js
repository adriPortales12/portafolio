// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Projects from './components/projects';
import Contact from './components/contact';
import './styles/app.css';

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
