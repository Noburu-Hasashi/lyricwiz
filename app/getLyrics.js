import { useState, useEffect } from 'react';
import Lyrics from './lyrics';

export default function GetLyrics({ artist, song }) {
    const [lyrics, setLyrics] = useState('');

    async function fetchLyrics() {
        try {
            const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
            if (!res.ok) {
                throw new Error('Failed to fetch lyrics');
            }
            const data = await res.json();
            console.log('API response:', data); // Log the API response
            setLyrics(data.lyrics);
        } catch (error) {
            console.error('Error fetching lyrics:', error);
            setLyrics('Lyrics not found');
        }
    }
    
    useEffect(() => {
        fetchLyrics();
    }, [artist, song]);

    return <Lyrics lyrics={lyrics} />;
}