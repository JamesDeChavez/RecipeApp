import React from "react";
import { Instruction } from "../../utils/interfaces";
import InstructionsFormItem from "../InstructionsFormItem";
import './styles.css';

interface Props {
    instructions: Instruction[],
    setInstructions: React.Dispatch<React.SetStateAction<Instruction[]>>,
    vidRef: React.MutableRefObject<any>
};

const InstructionsForm: React.FC<Props> = ({ instructions, setInstructions, vidRef }) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let newState = [...instructions];
        setInstructions(newState);
    };

    const deleteStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx: number) => {
        e.preventDefault();          
        let newState = [...instructions];
        newState.splice(idx, 1);
        setInstructions(newState);
    };

    const addStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        vidRef.current!.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        let newState = [...instructions];
        setInstructions(newState);
        console.log(vidRef.current);
    };

    const className = 'InstructionsForm';
    return(
        <div className={className} >
            <div className={`${className}_topContainer`}>
                <h4 className={vidRef.current !== undefined ? 
                    `${className}_header`
                :
                    `${className}_header ${className}_novid`
                }>Instructions:</h4>
                <ul className={`${className}_list`}>
                    <InstructionsFormItem vidExists={vidRef.current !== undefined}/>
                </ul>
            </div>
            <div className={`${className}_bottomContainer`}>
                <button onClick={addStep} className={`${className}_button`}>Add Step</button>
            </div>

        </div>
    );
};

export default InstructionsForm;