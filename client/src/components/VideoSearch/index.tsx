import React, { useEffect, useState } from "react"
import { Video } from "../../utils/interfaces";
import VideosList from "../VideosList";

interface Props {
    setVidSelected: React.Dispatch<React.SetStateAction<Video | undefined>>
};

const VideoSearch: React.FC<Props> = ({ setVidSelected }) => {
    
    const [videos, setVideos] = useState<Video[]>([]);
    const [inputs, setInputs] = useState({
        search: '',
        url: ''
    })
    const [errors, setErrors] = useState({
        search: '',
        url: ''
    })

    useEffect(() => {
        setErrors({search: '', url: ''})
    }, [inputs])

    const apiKey = '';    

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputs.search) {
            setErrors({ search: 'No search provided', url: '' });
            return;
        }

        const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${inputs.search.replaceAll(' ', '%20')}&key=${apiKey}`;
        const res = await fetch(apiUrl);
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
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputs.url) {
            setErrors({ search: '', url: 'No URL provided' });
            return;
        }
        const url = inputs.url;
        const videoId = url.split('?v=')[1].split('&')[0];
        console.log(videoId);

        const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        const newVideoState = {
                title: data.items[0].snippet.title,
                thumbnail: data.items[0].snippet.thumbnails.default,
                channel: data.items[0].snippet.channelTitle,
                videoId: data.items[0].id
        };
        
        setVidSelected(newVideoState);        
    };

    const selectNoVideo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newVideoState = {
            title: 'N/A',
            thumbnail: 'N/A',
            channel: 'N/A',
            videoId: 'N/A'
        };
    
        setVidSelected(newVideoState);        
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputs((prevState) => ({ ...prevState, [e.target.id]: value }));
    };
    
    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.preventDefault();
        console.log(e.currentTarget.dataset.video);
        const video = JSON.parse(e.currentTarget.dataset.video!);
        setVidSelected(video);
    }
    
    const className = 'videoSearch';
    return (
        <div className={className}>
            <h4>Video for Recipe</h4>

            <h5>Option 1: Search Youtube for New Recipe</h5>
            <form onSubmit={handleSearch}>
                <input 
                    type='text'
                    id='search'
                    placeholder='Search for video here'
                    value={inputs.search}
                    onChange={handleChange}
                    autoComplete='off'
                />                
                <button type='submit' >Search</button>
            </form>
            <span>{errors.search}</span>

            {!videos.length ?
                <></>
            :
                <VideosList videos={videos} onClick={handleClick} />
            }

            <h5>Option 2: Provide Youtube URL</h5>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    id='url'
                    placeholder='Provide URL here'
                    value={inputs.url}
                    onChange={handleChange}
                    autoComplete='off' 
                />
                <button type='submit'>Submit</button>
            </form>
            <span>{errors.url}</span>

            <h5>Option 3: No Video Needed</h5>
            <form onSubmit={selectNoVideo}>
                <button type='submit'>Select</button>
            </form>
        </div>
    )
}

export default VideoSearch