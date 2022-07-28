import { useState } from "react";

const Test = () => {
    const [inputs, setInputs] = useState({
        input1: '',
        input2: ''
    });
    const [inputHidden, setInputHidden] = useState(false)
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputs((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputHidden(true);
    };

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setInputHidden(false);
    }

    return (
        <div>
            {!inputHidden ?
                <form onSubmit={onSubmit}>
                    <input
                        id='input1' 
                        type="text"
                        value={inputs['input1']}
                        onChange={onChange} 
                    />
                    <input
                        id='input2' 
                        type="text"
                        value={inputs['input2']}
                        onChange={onChange} 
                    />
                    <button type='submit'>Submit</button>
                </form>
            :
                <button onClick={onClick}>Return</button>
            }
        </div>
    )
};

export default Test;