import React, { useState } from "react";
import StepListItem from "../StepListItem";
import InstructionDetails from "../InstructionDetails";
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Instruction } from "../../utils/interfaces";
import classNames from "classnames";
import './styles.css';

interface Props {
    instructions: Instruction[],
    setInstructionDetailsVisible: (value: React.SetStateAction<boolean>) => void,
    switchList: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    wideToDefault: boolean,
    wideViewActive: boolean,
    instructionDetailsVisible: boolean
};

const RecipeInstructions: React.FC<Props> = ({ instructions, switchList, setInstructionDetailsVisible, wideToDefault, wideViewActive, instructionDetailsVisible }) => {
    const [instructionDetails, setInstructionDetails] = useState<Instruction>();
    
    let stepCount = 1;
    const className = 'RecipeInstructions';
    return (
        <div className={classNames(
            className,
            { [`${className}_Wide`]: wideViewActive }
        )}>
            <div className={`${className}_headerContainer`}>
                <h4 className={`${className}_instructionsHeader`}>
                    <span style={{textDecoration: 'underline'}}>Instructions</span>
                    {` (Click step for more details)`}
                </h4>
                <span 
                    className={`${className}_switch`} 
                    onClick={switchList}
                    style={{display: wideViewActive ? 'inherit' : 'none'}}
                >
                    {`Go To Ingredients `}
                    <FontAwesomeIcon icon={faAnglesRight} />
                </span>
            </div>

            {!instructionDetailsVisible ?
                <ul className={classNames(
                    `${className}_instructionsList`,
                    { [`${className}_instructionsList_Wide`]: wideViewActive }
                )}>                        
                    {instructions.map((step, index) => {
                        let itemNumber = stepCount;
                        stepCount = itemNumber + 1;
                        return (
                            <StepListItem 
                                step={step} 
                                index={index}
                                itemNumber={itemNumber}
                                setInstructionDetailsVisible={setInstructionDetailsVisible}
                                setInstructionDetails={setInstructionDetails}
                                wideViewActive={wideViewActive}
                                wideToDefault={wideToDefault}
                            />
                        )
                    })}
                </ul>
            :
                <InstructionDetails
                    data={instructionDetails}
                    setInstructionDetailsVisible={setInstructionDetailsVisible}
                    wideViewActive={wideViewActive}
                />
            }
        </div>
    );
};

export default RecipeInstructions;