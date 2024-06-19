import React from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Where knowledge begins</h1>
        <ChatInterface />
        <p>First time you enter it may take a while (up to 50 seconds) since it's deployed on Render (with a free account).</p>
      </header>
    </div>
  );
}

export default App;
