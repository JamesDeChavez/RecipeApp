import React from "react";
import { Video } from "../../utils/interfaces";

interface Props {
    video: Video
};

const RecipeVideo: React.FC<Props> = ({ video }) => {
    
    const className = 'RecipeVideo';
    return(
        <div className={className}>
            <iframe src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`} title="Video Player"></iframe> 
            <h4>{video.title}</h4>
        </div>
    );
};

export default RecipeVideo;