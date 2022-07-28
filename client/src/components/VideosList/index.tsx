import React from 'react'
import { Video } from '../../utils/interfaces';

interface Props{
    videos: Video[],
    onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const className = 'videosList';

const VideosList: React.FC<Props> = ({ videos, onClick }) => {
    return (
        <ul className={className}>
            {videos.map(video => {
                return (
                    <li 
                        key={video.videoId} 
                        onClick={onClick}
                        data-video={JSON.stringify(video)}
                    >
                        <div>{`${video.title} - by ${video.channel}`}</div>
                        <img src={video.thumbnail} alt="" />
                    </li>
                )
            })}
        </ul>
    )
}

export default VideosList;