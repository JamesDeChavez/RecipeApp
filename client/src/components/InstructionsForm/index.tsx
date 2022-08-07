import React from "react";
import InstructionsFormItem from "../InstructionsFormItem";
import './styles.css';

interface Props {
    instructions: { text: string }[],
    setInstructions: React.Dispatch<React.SetStateAction<{ text: string }[]>>,
    vidRef: React.MutableRefObject<any>
};

const InstructionsForm: React.FC<Props> = ({ instructions, setInstructions, vidRef }) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let newState = [...instructions];
        newState[idx]['text'] = e.target.value;
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
        newState.push({ text: '' });
        setInstructions(newState);
    };

    const className = 'InstructionsForm';
    return(
        <div className={className} >
            <h4 className={`${className}_header`}>Instructions:</h4>
            <ul className={`${className}_list`}>
                <InstructionsFormItem />
            </ul>
        </div>
    );
};

export default InstructionsForm;