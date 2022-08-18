import React, { useEffect, useState } from "react";
import { Instruction } from "../../utils/interfaces";
import './styles.css';

interface Props {
    step: Instruction,
    index: number,
    itemNumber: number,
    setInstructionDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setInstructionDetails: React.Dispatch<React.SetStateAction<Instruction | undefined>>,
    wideViewActive: boolean,
    wideToDefault: boolean,
};

const StepListItem: React.FC<Props> = ({ step, index, itemNumber, setInstructionDetailsVisible, setInstructionDetails, wideViewActive, wideToDefault }) => {

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setInstructionDetails(step);
        setInstructionDetailsVisible(true);
    }

    const className = 'StepListItem';
    return (
        <li 
            className={`
                ${className}
                ${wideViewActive ? `${className}_Wide` : ''}
                ${wideToDefault ? `${className}_WideToDefault` : ''}
            `}  
            key={index} 
            onClick={handleClick}
        >
            <div className={`${className}_container`}>
                <div className={`${className}_numberContainer`}>
                    <p className={`${className}_number`}>
                        {`${itemNumber}`}
                    </p>
                </div>

                <p className={`${className}_action`}>
                    {`${step.summary.action}`}
                </p>
                <p className={`${className}_step`}>
                    {
                        step.summary.items.map(item => {
                            return ` ${item}`
                        }).join(',')
                    }
                </p>
                <p className={`${className}_time`}>
                    {step.time ? `${step.time}` : '-'}
                </p>
            </div>
        </li>
    );
};

export default StepListItem;