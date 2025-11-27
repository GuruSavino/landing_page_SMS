import React from 'react';
import './App.css';
//import { Hero } from './components/landing';
import Hero from './components/landing/Hero';
import Features from './components/features/Features';

function App(){
  return (
    <div className="App">
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}

export default App;
