import React, { useEffect, useState } from "react";
import { Video } from "../../utils/interfaces";
import './styles.css';

interface Props {
    setVideos: React.Dispatch<React.SetStateAction<Video[]>>
};

const apiKey = ''; 

const YoutubeSearch: React.FC<Props> = ({ setVideos }) => {
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
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${input.replaceAll(' ', '%20')}&key=${apiKey}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            const newVideosState = data.items.map((video: any) => {
                return ({
                    title: video.snippet.title,
                    thumbnail: video.snippet.thumbnails.medium.url,
                    channel: video.snippet.channelTitle,
                    videoId: video.id.videoId
                })
            });
            setVideos(newVideosState);
        } catch (error) {
            console.log(error)
        }
    };

    const className = 'YoutubeSearch';
    return (
        <div className={`${className}`}>
            <h5 className={`${className}_header`}>
                Option 1: <br />
                Search Youtube
            </h5>
            <form className={`${className}_form`} onSubmit={handleSubmit}>
                <input 
                    type='text'
                    id='input'
                    placeholder='* Enter search'
                    value={input}
                    onChange={handleChange}
                    autoComplete='off'
                    className={`${className}_input`}
                /> 
                <button className={`${className}_button`} type='submit' >Search</button>
            </form>
            <span className={`${className}_error`}>{error}</span>
        </div>
    );
};

export default YoutubeSearch;