import React from "react";

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
            <h4>Instructions</h4>
            <form>
                {instructions.map((step, index) => {
                    return (
                        <div key={`step_${index+1}`}>
                            <label htmlFor={`step_${index+1}`}>{`Step ${index+1}: `}</label>
                            <input 
                                type='text'
                                id={`step_${index+1}`}
                                value={step.text}
                                autoComplete='off'
                                onChange={(e) => onChange(e, index)}
                            />
                            <button onClick={(e) => deleteStep(e, index)}>Delete</button>
                        </div>
                    )
                })}
                <button onClick={addStep}>Add Step</button>
            </form>
        </div>
    );
};

export default InstructionsForm;