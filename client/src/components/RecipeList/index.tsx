import React, { useEffect, useState } from "react";
import { Recipe } from "../../utils/interfaces";
import { faCircleLeft, faCircleRight, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sampleRecipeList as SRL } from "../../utils/sampleRecipeList";
import './styles.css';

interface Props {
    setRecipeSelected: React.Dispatch<React.SetStateAction<Recipe | undefined>>,
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
};

const RecipeList: React.FC<Props> = ({ setRecipeSelected, renderConstants, setRender }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(5);

    useEffect(() => {
        setRecipes(SRL);
        if (SRL.length < 5) setLast(SRL.length); 
    }, [SRL])

    const selectRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const recipe = JSON.parse(e.currentTarget.dataset.recipe!);
        setRecipeSelected(recipe);
    };

    const nextPage = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();
        const lastTooBig = last + 5 > recipes.length;        
        const newLast = lastTooBig ? recipes.length : last + 5;
        const newFirst = newLast - 5;
        setFirst(newFirst);
        setLast(newLast);
    };

    const prevPage = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();
        const firstTooSmall = first - 5 < 0;
        const newFirst = firstTooSmall ? 0 : first - 5;
        const newLast = newFirst + 5;
        setFirst(newFirst);
        setLast(newLast);
    };

    const goBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[0]);
    }

    let number = first;
    const className= 'RecipeList';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_imageContainer`}>
                    <div className={`${className}_overlay`}></div>
                </div>
                <div className={`${className}_rightContainer`}>
                    <span className={`${className}_backward`} onClick={goBack}>
                        <FontAwesomeIcon icon={faBackward} />
                        {` Back`}
                    </span>
                    <h3 className={`${className}_header`}>Your Recipes</h3>
                    <ul className={`${className}_list`}>
                        {recipes.length ? recipes.slice(first, last).map(recipe => { 
                            number += 1;
                            return (
                                <li 
                                    key={recipe.title}
                                    className={`${className}_listitem`}
                                >                            
                                    <div className={`${className}_listitemTextContainer`}>
                                        <p className={`${className}_listitemFirstRow`}>
                                            <span className={`${className}_recipeNumber`}>{number < 10 ? `0${number}.` : `${number}.`}</span>
                                            <span className={`${className}_recipeTitle`}>{recipe.title}</span>
                                        </p>
                                        <p className={`${className}_videoTitle`}>{`Video Title: ${recipe.video.title}`}</p>
                                        <p className={`${className}_videoChannel`}>{`Youtube Channel: ${recipe.video.channel}`}</p>

                                    </div>
                                    <div className={`${className}_listitemButtonContainer`}>
                                        <button 
                                            className={`${className}_selectButton`}
                                            data-recipe={JSON.stringify(recipe)}
                                            onClick={selectRecipe}
                                        >Select</button>
                                    </div>                            
                                </li>
                            )
                        })                        
                        :
                        <li 
                            className={`${className}_listitem`}
                        >                            
                            <div className={`${className}_listitemTextContainer`}>
                                <p className={`${className}_listitemFirstRow`}>
                                    <span className={`${className}_recipeNumber`}></span>
                                    <span className={`${className}_recipeTitle`}>No Recipes Created</span>
                                </p>
                            </div>
                            <div className={`${className}_listitemButtonContainer`}>
                            </div>                            
                        </li>
                        }                        
                    </ul>
                    <div className={`${className}_paginationContainer`}>
                        <FontAwesomeIcon 
                            icon={faCircleLeft} 
                            onClick={prevPage} 
                            className={first === 0 ? `${className}_disabled` : ''} />               
                        <FontAwesomeIcon 
                            icon={faCircleRight} 
                            onClick={nextPage}
                            className={last === recipes.length ? `${className}_disabled` : ''} />
                        <span className={`${className}_paginationText`}>{`Results ${first + 1} - ${last} (Total Recipes ${SRL.length})`}</span>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default RecipeList;