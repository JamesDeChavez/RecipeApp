import React, { useEffect, useState } from "react";
import { Props } from "../VideoSearch";
import './styles.css';

const apiKey = ''; 

const UrlSearch: React.FC<Props> = ({ setVidSelected }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setError('')
    }, [input]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) {
            setError('No URL Provided');
            return;
        };
        const videoId = input.split('?v=')[1].split('&')[0];
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            const newVideoState = {
                title: data.items[0].snippet.title,
                thumbnail: data.items[0].snippet.thumbnails.default,
                channel: data.items[0].snippet.channelTitle,
                videoId: data.items[0].id
            };
            setVidSelected(newVideoState);
        } catch (error) {
            console.log(error);
        }
    }

    const className = 'UrlSearch';
    return (
        <div className={className}>
            <h5 className={`${className}_header`}>
                Option 2: <br />
                Provide Youtube URL
            </h5>
            <form className={`${className}_form`} onSubmit={handleSubmit}>
                <input 
                    type='text'
                    id='url'
                    placeholder='* Enter URL'
                    value={input}
                    onChange={handleChange}
                    autoComplete='off' 
                />
                <button type='submit'>Submit</button>
            </form>
            <span>{error}</span>
        </div>
    );
};

export default UrlSearch;