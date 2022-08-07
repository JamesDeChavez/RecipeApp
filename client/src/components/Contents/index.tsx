import React from "react";
import { faPencil, faBook, faCarrot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../assets/pexels-cottonbro-3298605.jpg';
import './styles.css';

interface Props {
    setRender: React.Dispatch<React.SetStateAction<string>>
    renderConstants: string[]
}

const Contents: React.FC<Props> = ({ setRender, renderConstants }) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, renderOption: string) => {
        e.preventDefault();
        setRender(renderOption);
    }; 

    const className = 'Contents';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_imageContainer`}>
                    <img className={`${className}_image`} src={image} alt="cooking image" />
                </div>
                <div className={`${className}_rightContainer`}>
                    <h3 className={`${className}_header`}>Table of Contents</h3>
                    <div className={`${className}_option`}>
                        <FontAwesomeIcon icon={faPencil}/>
                        <h4>Create New Recipe</h4>
                        <p>
                            Learn a recipe from Youtube <br />
                            and save it to your recipe book
                        </p>
                        <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[1])}>Select</button>
                    </div>
                    <div className={`${className}_option`}>
                        <FontAwesomeIcon icon={faBook}/>  
                        <h4>View Recipe Book</h4>
                        <p>
                            View your saved recipes<br/>
                            Easy Amazon Fresh ordering
                        </p>
                        <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[2])}>Select</button>
                    </div>
                    <div className={`${className}_option`}>
                        <FontAwesomeIcon icon={faCarrot}/>
                        <h4>Ingredients List</h4>
                        <p>
                            View your ingredient list<br/>
                            Add new Amazon Fresh ingredients 
                        </p>
                        <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[3])}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contents;