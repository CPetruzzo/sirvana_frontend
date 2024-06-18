import React, { useState } from 'react';
import axios from 'axios';

const ChatInterface = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/generate', { prompt });
      setResponse(res.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit">Generate</button>
      </form>
      {response && <div>{response}</div>}
    </div>
  );
};

export default ChatInterface;
