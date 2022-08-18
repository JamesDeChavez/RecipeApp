import React from "react";
import classNames from 'classnames';
import './styles.css';

interface Props {
    videoId: string,
    title: string
    wideViewActive: boolean,
    noVidActive: boolean,
    noVidView: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    defaultView: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    wideView: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const RecipeVideo: React.FC<Props> = ({ videoId, wideViewActive, title, noVidActive, noVidView, defaultView, wideView }) => {
    
    const className = 'RecipeVideo';
    return(
        <div className={classNames(
            className,
            { [`${className}_Wide`]: wideViewActive }
        )}>
            <div className={`${className}_titleContainer`}>
                <h3 className={`${className}_title`}>{`Recipe: ${title ? title : 'Create Recipe Title Below'}`}</h3>
            </div>

            <div className={`${className}_iframeResponsive`}>
                <iframe 
                    src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`} 
                    title="Video Player" 
                    className={`${className}_iframe`}
                ></iframe>
            </div>                    

            <div className={`${className}_viewsContainer`}>
                <button 
                    className={`${className}_viewButton`} 
                    onClick={noVidView}
                >Hide Video</button>
                <button 
                    className={classNames(
                        `${className}_viewButton`,
                        { [`${className}_viewButton_Disabled`]: !noVidActive && !wideViewActive }
                    )} 
                    onClick={defaultView}
                >Default</button>
                <button 
                    className={classNames(
                        `${className}_viewButton`,
                        { [`${className}_viewButton_Disabled`]: wideViewActive }
                    )} 
                    onClick={wideView}
                >Expand Video</button>                            
            </div>
        </div>
    );
};

export default RecipeVideo;