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
      <h1 className=" text-center m-10 text-5xl font-extrabold text-orange-600 hover:text-orange-400 subpixel-antialiased font-mono">LyricWiz</h1>
      <hr className="border-2 border-orange-600"></hr>
      <div className="text-center m-10 text-2xl text-orange-600 subpixel-antialiased font-mono">
      <p className="pb-5">Find the lyrics to your favorite songs!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" className="text-slate-900 rounded-3xl mr-5" value={artist} placeholder="  Artist..." onChange={(event) => setArtist(event.target.value)}/>
        <input type="text" className="text-slate-900 rounded-3xl ml-5" value={song} placeholder="  Song..." onChange={(event) => setSong(event.target.value)}/>
      </form>
      </div>
      <GetLyrics artist={artist} song={song} />
      <hr className="border-2 border-orange-600 mb-10 mt-10"></hr>
    </main>
  );
}