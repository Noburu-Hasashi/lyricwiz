import { useState, useEffect } from "react";

export default function Lyrics({ lyrics }) {
    const [formattedLyrics, setFormattedLyrics] = useState([]);

    useEffect(() => {
        if (lyrics) {
            formatLyrics();
        }
    }, [lyrics]);

    async function formatLyrics() {
        const lines = lyrics.split('\n');
        const formatted = lines.slice(1).map((line, index) => {
            return <span key={index}>{line}<br /></span>;
        });
        setFormattedLyrics(formatted);
    }

    return (
        <main>
            <div className=" text-center font-semibold font-mono text-orange-400">
            {formattedLyrics.length > 0 ? (
                <ul>
                    {formattedLyrics.map((line, index) => {
                        return <li key={index}>{line}</li>;
                    })}
                </ul>
            ) : (
                <p>No lyrics available</p>
            )}
            </div>
        </main>
    );
}
