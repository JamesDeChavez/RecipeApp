import React from "react";
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

interface Props {
    vidExists: boolean
}

const InstructionsFormItem: React.FC<Props> = ({ vidExists }) => {
    const className = 'InstructionsFormItem';
    return (
        <li className={className}>
            <p className={vidExists ?
                `${className}_step`
            :
                `${className}_step ${className}_novid`
            }>{'1. Prepare vegetables'}</p>
            <div className={`${className}_iconContainer`}>
                <FontAwesomeIcon icon={faPenToSquare} className={!vidExists ? `${className}_novid` : ''} />
                <FontAwesomeIcon icon={faX} className={!vidExists ? `${className}_novid` : ''} />
            </div>            
        </li>
    );
};

export default InstructionsFormItem;