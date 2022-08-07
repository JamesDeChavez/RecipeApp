import React, { useState } from 'react'
import { Video } from '../../utils/interfaces';
import { Props as ParentProps } from '../VideoSearch';
import { faCircleLeft, faCircleRight, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

interface Props extends ParentProps{
    videos: Video[],
    setVideos: React.Dispatch<React.SetStateAction<Video[]>>
};

const VideosList: React.FC<Props> = ({ videos, setVideos, setVidSelected }) => {
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(4);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const video = JSON.parse(e.currentTarget.dataset.video!);
        setVidSelected(video);
    };

    const nextPage = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();

        const lastTooBig = last + 4 > videos.length;

        
        const newLast = lastTooBig ? videos.length : last + 4;
        const newFirst = newLast - 4;

        setFirst(newFirst);
        setLast(newLast);
    };

    const prevPage = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();

        const firstTooSmall = first - 4 < 0;

        const newFirst = firstTooSmall ? 0 : first - 4;
        const newLast = newFirst + 4;

        setFirst(newFirst);
        setLast(newLast);
    };

    const goBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        setVideos([]);
    }

    const className = 'videosList';
    return (
        <ul className={className}>
            <span className={`${className}_backward`} onClick={goBack}>
                <FontAwesomeIcon icon={faBackward} />
                {` Back`}
            </span>
            <h4 className={`${className}_header`}>{`Search Results (${videos.length} results):`} </h4>
            {videos.slice(first, last).map(video => {
                return (
                    <li 
                        key={video.videoId}
                        className={`${className}_listitem`}
                    >
                        <img src={video.thumbnail} alt="video thumbnail" />
                        <h5>{video.title}</h5>
                        <p>{`By ${video.channel}`}</p>
                        <button 
                            onClick={handleClick} 
                            data-video={JSON.stringify(video)}
                        >Select</button>
                    </li>
                )
            })}
            <div className={`${className}_pagination`}>
                
                <FontAwesomeIcon 
                    icon={faCircleLeft} 
                    onClick={prevPage} 
                    className={first === 0 ? `${className}_disabled` : ''} />               
                <FontAwesomeIcon 
                    icon={faCircleRight} 
                    onClick={nextPage}
                    className={last === videos.length ? `${className}_disabled` : ''} />
                <span>{`Results ${first + 1} - ${last}`}</span>

            </div>
        </ul>
    );
};

export default VideosList;