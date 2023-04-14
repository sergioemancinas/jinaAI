import React, { useState, useEffect } from 'react';
import deezerApi from '../lib/deezerApi';

const MusicRecommendations = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await deezerApi.get('chart/0/tracks');
        const trackDetails = await Promise.all(
          data.data.map(async (track) => {
            const response = await deezerApi.get(`track/${track.id}`);
            return response.data;
          }),
        );
        setTracks(trackDetails);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Top Tracks</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id} className="mb-2">
            {track.title} - {track.artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicRecommendations;
