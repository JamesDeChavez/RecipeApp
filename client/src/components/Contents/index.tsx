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
                <h3 className={`${className}_header`}>Table of Contents</h3>
                <div className={`${className}_option`}>
                    <FontAwesomeIcon icon={faPencil}/>
                    <h4>Create New Recipe</h4>
                    <p>
                        Use Youtube to learn a new Recipe<br/>
                        Note down instructions as you watch<br/>
                        Link Amazon Fresh to Recipe for Easy Ordering
                    </p>
                    <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[1])}>Select</button>
                </div>
                <div className={`${className}_option`}>
                    <FontAwesomeIcon icon={faBook}/>  
                    <h4>View Recipe Book</h4>
                    <p>
                        View your saved single page recipes<br/>
                        Search recipe book for saved recipes<br/>
                        Order recipe ingredients from Amazon Fresh
                    </p>
                    <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[2])}>Select</button>
                </div>
                <div className={`${className}_option`}>
                    <FontAwesomeIcon icon={faCarrot}/>
                    <h4>View Ingredients List</h4>
                    <p>
                        View and edit existing ingredient list<br/>
                        Add new Amazon Fresh ingredients <br/>
                        for use in recipes for easy ordering
                    </p>
                    <button className={`${className}_button`} onClick={(e) => handleClick(e, renderConstants[3])}>Select</button>
                </div>
            </div>
        </div>
    )
};

export default Contents;