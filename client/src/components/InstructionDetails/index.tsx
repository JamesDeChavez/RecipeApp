import React from "react";
import { Instruction } from "../../utils/interfaces";
import { faBackward, faClock, faNoteSticky, faFileLines, faCarrot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

interface Props {
    data: Instruction | undefined,
    setInstructionDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    wideViewActive: boolean
};

const data: React.FC<Props> = ({ data, setInstructionDetailsVisible, wideViewActive }) => {
    const goBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        setInstructionDetailsVisible(false);
    };

    const className = 'InstructionDetails';
    return (
        <div className={`
            ${className}
            ${wideViewActive ? `${className}_Wide` : ''}
        `}>

            <div className={`${className}_backContainer`}>
                <span className={`${className}_backward`} onClick={goBack}>
                    <FontAwesomeIcon icon={faBackward} />
                    {` Back`}
                </span>
            </div>

            <div className={`
                ${className}_contentContainer
                ${wideViewActive ? `${className}_contentContainer_Wide` : ''}
            `}>
                <div className={`${className}_summTimeContainer`}>

                    <div className={`${className}_summContainer`}>
                        <FontAwesomeIcon icon={faNoteSticky} />
                        <p className={`${className}_detailsSummary`}>
                            {
                                `${data?.summary.action} - ${data?.summary.items.map(item => {
                                    return ` ${item}`
                                })}`
                            }
                        </p>
                    </div>

                    <div className={`${className}_timeContainer`}>
                        <FontAwesomeIcon icon={faClock} />
                        <p className={`${className}_detailsTime`}>{data?.time ? data.time : 'N/A'}</p>
                    </div>

                </div>
            
                <div className={`${className}_descContainer`}>
                    <FontAwesomeIcon icon={faFileLines} />
                    <p className={`${className}_detailsDescription`}>{data?.description}</p>
                </div>

                <div className={`
                    ${className}_ingredientsContainer
                    ${wideViewActive ? `${className}_ingredientsContainer_Wide` : ''}
                `}>
                    <FontAwesomeIcon icon={faCarrot} />
                    <div>
                        <div className={`
                            ${className}_listItemsContainer
                            ${wideViewActive ? `${className}_listItemsContainer_Wide` : ''}
                        `}>
                            {data?.ingredients.length ? data?.ingredients.map(item => {
                                return (
                                    <p className={`
                                        ${className}_detailsIngredients
                                        ${wideViewActive ? `${className}_detailsIngredients_Wide` : ''}
                                    `}>
                                        {item.amount ? `${item.name} - ${item.amount}` : `${item.name}`}
                                    </p>
                                )
                            }) : <p className={`
                                    ${className}_detailsIngredients
                                    ${wideViewActive ? `${className}_detailsIngredients_Wide` : ''}
                                `}>No Ingredients</p>}     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default data