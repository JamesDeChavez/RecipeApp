import React, { useState } from "react"
import { Video } from "../../utils/interfaces";
import NoVidForm from "../NoVidForm";
import UrlSearch from "../UrlSearch";
import VideosList from "../VideosList";
import YoutubeSearch from "../YoutubeSearch";
import image from '../../assets/pexels-polina-tankilevitch-7669550-crop.jpg';
import './styles.css'

export interface Props {
    setVidSelected: React.Dispatch<React.SetStateAction<Video | undefined>>
};

const VideoSearch: React.FC<Props> = ({ setVidSelected }) => {    
    const [videos, setVideos] = useState<Video[]>([]);
    
    const className = 'videoSearch';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_image`} src={image} alt="desk image" />
                </div>
                <div className={`${className}_rightContainer`}>
                    <h4 className={`${className}_header`}>Video for Recipe</h4>

                    
                    {!videos.length ?
                    <>
                        <YoutubeSearch setVideos={setVideos} />
                        <UrlSearch setVidSelected={setVidSelected} />
                        <NoVidForm setVidSelected={setVidSelected} />
                    </>
                    :
                        <VideosList videos={videos} setVideos={setVideos} setVidSelected={setVidSelected} />
                    }             
                </div>
            </div>
                
        
        </div>
    )
}

export default VideoSearch