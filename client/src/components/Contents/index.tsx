import React from "react";

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
            <h3>Contents Component</h3>
            <button onClick={(e) => handleClick(e, renderConstants[1])}>Create Recipe</button>
            <button onClick={(e) => handleClick(e, renderConstants[2])}>View Recipes</button>
            <button onClick={(e) => handleClick(e, renderConstants[3])}>View Ingredients</button>
            <button onClick={(e) => handleClick(e, renderConstants[4])}>View Profile</button>
        </div>
    )
};

export default Contents;