"use client"

import { useState } from "react";
import GetLyrics from "./getLyrics";

export default function Home() {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const lyricsData = await GetLyrics({ artist, song });
      setLyrics(lyricsData.lyrics);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      setLyrics('Lyrics not found');
    }
  }

  return (
    <main>
      <h1>LyricWiz</h1>
      <p>Find the lyrics to your favorite songs!</p>
      <form onSubmit={handleSubmit}>
        <label>Artist</label>
        <input type="text" className="text-slate-900" value={artist} onChange={(event) => setArtist(event.target.value)}/>
        <label>Song</label>
        <input type="text" className="text-slate-900" value={song} onChange={(event) => setSong(event.target.value)}/>
      </form>
      <GetLyrics artist={artist} song={song} />
    </main>
  );
}