import React from "react";
import { Props } from "../VideoSearch";
import './styles.css';

const NoVidForm: React.FC<Props> = ({ setVidSelected }) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        const newVideoState = {
            title: 'N/A',
            thumbnail: 'N/A',
            channel: 'N/A',
            videoId: 'N/A'
        };    
        setVidSelected(newVideoState);        
    };

    const className= 'NoVidForm';
    return (
        <div className={className}>
            <h5>Option 3: No Video Needed</h5>
            <form className={`${className}_form`} onSubmit={handleSubmit}>
                <button type='submit'>Select</button>
            </form>
        </div>
    );
};

export default NoVidForm;