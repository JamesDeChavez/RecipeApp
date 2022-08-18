import React, { useState } from "react"
import { Video } from "../../utils/interfaces";
import NoVidForm from "../NoVidForm";
import UrlSearch from "../UrlSearch";
import VideosList from "../VideosList";
import YoutubeSearch from "../YoutubeSearch";
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
                <div className={`
                    ${className}_imageContainer
                    ${videos.length ? `${className}_imageContainer_vidList` : ''}
                `}>
                    <div className={`${className}_overlay`}></div>
                </div>
                <div className={`
                    ${className}_rightContainer
                    ${videos.length ? `${className}_rightContainer_vidList` : ''}
                `}>
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