import React from "react";

interface Props {
    instructions: string[]
};

const RecipeInstructions: React.FC<Props> = ({ instructions }) => {
    const className = 'RecipeInstructions';
    return (
        <div className={className}>
            <h3>Instructions:</h3>
            <ul>
                {instructions.map((step, index) => {
                    return (
                        <li key={index}>{`${index + 1}. ${step}`}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default RecipeInstructions;