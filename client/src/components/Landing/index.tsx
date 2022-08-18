import React from "react";
import './styles.css';

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
}

const Landing: React.FC<Props> = ({ renderConstants, setRender }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[3]);
    };

    const className = 'Landing';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_overlay`}>
                    <h3 className={`${className}_header`}>
                        Single Page <br />
                        Recipes
                    </h3>
                    <p className={`${className}_text`}>
                        Discover Youtube Recipes<br/>
                        Easy Amazon Fresh Ordering<br/>
                        Single-page Interface - No Scrolling
                    </p>                    
                    <button onClick={handleClick} className={`${className}_button`}>View Sample Recipe</button>
                </div>
            </div>          
        </div>
    )
};

export default Landing;