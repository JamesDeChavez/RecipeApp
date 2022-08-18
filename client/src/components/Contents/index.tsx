import React from "react";
import { faPencil, faBook, faCarrot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <div className={`${className}_overlay`}></div>
                </div>
                <div className={`${className}_rightContainer`}>
                    <h3 className={`${className}_header`}>Table of Contents</h3>
                    <div className={`${className}_option`}>
                        <FontAwesomeIcon icon={faPencil} />
                        <h4 className={`${className}_name`}>Create Recipe</h4>
                        <p className={`${className}_description`}>
                            Search recipes on Youtube <br />
                            Save single page recipes  
                        </p>
                        <div className={`${className}_buttonContainer`}>
                            <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[1])}>Select</button>
                        </div>
                    </div>
                    <div className={`${className}_option`}>
                        <FontAwesomeIcon icon={faBook}/>  
                        <h4 className={`${className}_name`}>Recipe Book</h4>
                        <p className={`${className}_description`}>
                            View saved recipes<br/>
                            Easy Amazon Fresh ordering
                        </p>
                        <div className={`${className}_buttonContainer`}>
                            <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[2])}>Select</button>
                        </div>
                    </div>
                    <div className={`${className}_option`}>
                        <FontAwesomeIcon icon={faCarrot}/>
                        <h4 className={`${className}_name`}>Ingredients List</h4>
                        <p className={`${className}_description`}>
                            View your ingredient list<br/>
                            Add new ingredients 
                        </p>
                        <div className={`${className}_buttonContainer`}>
                            <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[3])}>Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contents;