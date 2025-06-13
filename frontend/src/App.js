// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 0) {
        fetchResults(query);
      } else {
        setResults([]);
      }
    }, 300); // Debounce for autosuggest

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchResults = async (q) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/search?q=${encodeURIComponent(q)}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>⚡ Fast Product Search</h2>
      <p style={styles.subtitle}>Type a product name to see instant results (e.g. <code>iph</code>, <code>sam</code>)</p>

      <input
        type="text"
        value={query}
        placeholder="Start typing e.g. 'iphone', 'samsung'..."
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />

      {loading && <p style={styles.loading}>Searching...</p>}

      <ul style={styles.list}>
        {results.map((item, idx) => (
          <li key={idx} style={styles.item}>{item}</li>
        ))}
      </ul>

      {!loading && query.length > 0 && results.length === 0 && (
        <p style={styles.noResults}>No results found</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: 600,
    margin: '40px auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
  },
  subtitle: {
    color: '#777',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: '10px',
    fontSize: '1rem',
    marginBottom: 20,
    borderRadius: 6,
    border: '1px solid #ccc',
  },
  loading: {
    color: '#888',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },
  noResults: {
    color: '#999',
    fontStyle: 'italic',
  },
};

export default App;
