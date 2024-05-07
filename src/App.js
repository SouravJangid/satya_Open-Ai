"use client";
import React from 'react';
import './App.css';
import { LampDemo } from './components/ui/lamp.tsx';
function App() {
  return (
    <div className="App">
       <header className="App-header">
        <React.StrictMode>
          <LampDemo />
        </React.StrictMode>
      </header>
    </div>
  );
}


export default App;
