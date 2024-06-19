import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Asegúrate de que la ruta sea correcta

const ChatInterface = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://apitestopenai.onrender.com/api/generate', { prompt });
      setResponse(res.data.content);
    } catch (error) {
      console.error('Error al generar la respuesta:', error);
    }
  };

  const loadProducts = async () => {
    try {
      const res = await axios.get('https://apitestopenai.onrender.com/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const renderResponse = () => {
    if (!response) {
      return null;
    }

    return (
      <div className="response-container">
        <p>{response}</p>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter your prompt"
        />
        <button type="submit">Generate</button>
      </form>

      {renderResponse()}

      <h2>Productos Disponibles:</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ChatInterface;
