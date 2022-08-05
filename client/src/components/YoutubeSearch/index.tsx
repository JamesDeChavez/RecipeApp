import React, { useEffect, useState } from "react";
import { Video } from "../../utils/interfaces";
import './styles.css';

interface Props {
    videos: Video[],
    setVideos: React.Dispatch<React.SetStateAction<Video[]>>
};

const apiKey = ''; 

const YoutubeSearch: React.FC<Props> = ({ videos, setVideos }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
    }, [input]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) {
            setError('No Search Provided');
            return;
        };
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input.replaceAll(' ', '%20')}&key=${apiKey}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            const newVideosState = data.items.map((video: any) => {
                return ({
                    title: video.snippet.title,
                    thumbnail: video.snippet.thumbnails.default.url,
                    channel: video.snippet.channelTitle,
                    videoId: video.id.videoId
                })
            });
            setVideos(newVideosState);
        } catch (error) {
            console.log(error)
        }
    };

    const cancelSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setVideos([]);
    }

    const className = 'YoutubeSearch';
    return (
        <div className={className}>
            <h5>Option 1: Search Youtube for New Recipe</h5>
            <form className={`${className}_form`} onSubmit={handleSubmit}>
                <input 
                    type='text'
                    id='input'
                    placeholder='Search for video here'
                    value={input}
                    onChange={handleChange}
                    autoComplete='off'
                /> 
                <div className={`${className}_buttonContainer`}>
                    <button type='submit' >Search</button>
                    {videos.length ? <button onClick={cancelSearch}>Cancel</button> : <></> }
                </div>               
                    
            </form>
            <span>{error}</span>
        </div>
    );
};

export default YoutubeSearch;