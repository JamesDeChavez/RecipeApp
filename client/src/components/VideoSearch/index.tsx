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
                <h4 className={`${className}_header`}>Video for Recipe</h4>

                <YoutubeSearch videos={videos} setVideos={setVideos} />
                {!videos.length ?
                <>
                    <UrlSearch setVidSelected={setVidSelected} />
                    <NoVidForm setVidSelected={setVidSelected} />
                </>
                :
                    <VideosList videos={videos} setVidSelected={setVidSelected} />
                }              

            </div>
        </div>
    )
}

export default VideoSearch