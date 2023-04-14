import { useState } from 'react';
import axios from 'axios';
import styles from './Home.module.css';


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?query=${searchTerm}`);
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={`${styles.container} bg-background-color`}>
      <h1 className={styles.title}>Music recommendation system based on Deezer's database </h1>
      <div className={styles.flex}>
        <input
          type="text"
          className="search-bar flex-grow p-2 border border-gray-300 rounded"
          placeholder="Search for music..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="custom-button" onClick={handleSearch}>
          Search
        </button>
      </div>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id} className="mb-4">
              <a href={result.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {result.title} - {result.artist.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  