import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface Track {
    id: string;
    name: string;
    artists: string;
    uri: string;
}

interface NowPlaying {
    name: string;
    artists: string;
    isPlaying: boolean;
    uri: string;
}

const Spotify = () => {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);

    useEffect(() => {
        fetchTopTracks();
        fetchNowPlaying();
    }, []);

    const fetchTopTracks = async () => {
        try {
            const res = await axios.get<Track[]>(`${import.meta.env.VITE_API_URI}/spotify/top-tracks`);
            setTracks(res.data);
        } catch (error) {
            console.error("Top tracks fetch error:", error);
        }
    };

    const fetchNowPlaying = async () => {
        try {
            const res = await axios.get<NowPlaying>(`${import.meta.env.VITE_API_URI}/spotify/now-playing`);
            console.log(res);
            setNowPlaying(res.data);
            if (!res.data.name) toast.error("No song is currently playing")
        } catch (error) {
            console.error("Now playing fetch error:", error);
        }
    };

    const playTrack = async (id: string) => {
        try {
            await axios.put(`${import.meta.env.VITE_API_URI}/spotify/play/${id}`);
            fetchNowPlaying();
        } catch (error) {
            console.error("Play track error:", error);
            toast.error("Now my spotify app is closed in my device, I have to start it to play song ")
        }
    };

    const pausePlayback = async () => {
        try {
            await axios.put(`${import.meta.env.VITE_API_URI}/spotify/pause`);
            fetchNowPlaying();
        } catch (error) {
            console.error("Pause track error:", error);
        }
    };

    const resumePlayback = async () => {
        if (!nowPlaying?.uri) return;

        const trackId = nowPlaying.uri.split(":")[2];
        try {
            await axios.put(`${import.meta.env.VITE_API_URI}/spotify/play/${trackId}`);
            fetchNowPlaying();
        } catch (error) {
            console.error("Resume playback error:", error);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">🎧 Spotify Dashboard</h2>

            <section className="mb-6">
                {nowPlaying?.name ? (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">🟢 Now Playing</h3>
                        <p>
                            <strong>{nowPlaying.name}</strong> by {nowPlaying.artists}
                        </p>
                        <p>{nowPlaying.isPlaying ? "▶️ Playing" : "⏸️ Paused"}</p>
                        {nowPlaying.isPlaying ? (
                            <button
                                onClick={pausePlayback}
                                className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
                            >
                                Pause
                            </button>
                        ) : (
                            <button
                                onClick={resumePlayback}
                                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
                            >
                                Resume
                            </button>
                        )}
                    </div>
                ) : (
                    <p>No track is currently playing</p>
                )}
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">🔥 Top Tracks</h3>
                {tracks.map((track) => (
                    <div
                        key={track.id}
                        className="mb-3 flex items-center justify-between bg-gray-100 p-3 rounded"
                    >
                        <span>
                            <strong>{track.name}</strong> — {track.artists}
                        </span>
                        <button
                            onClick={() => playTrack(track.id)}
                            className="px-3 py-1 bg-green-600 text-white rounded"
                        >
                            Play
                        </button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Spotify;
