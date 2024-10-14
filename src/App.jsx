import  { useState } from 'react';
import './App.css';
import Footer from './Footer';

function App() {
  const [word, setWord] = useState('');  
  const [definition, setDefinition] = useState(null);  
  const [error, setError] = useState(null);  
  const [isLoading, setIsLoading] = useState(false);  

  
  const fetchWordDefinition = async () => {
    setIsLoading(true);
    setError(null);  

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Word not found');
      }
      const data = await response.json();
      setDefinition(data[0]);  
    } catch (err) {
      setError(err.message);
      setDefinition(null);
    } finally {
      setIsLoading(false);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (word) {
      fetchWordDefinition();  
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {definition && (
        <div>
          <h2>{definition.word}</h2>
          <p>{definition.meanings[0].definitions[0].definition}</p>
        </div>
      )}
       <Footer />
    </div>
  );
}

export default App;

