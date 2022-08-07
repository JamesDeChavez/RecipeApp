import React from "react";
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

interface Props {

}

const InstructionsFormItem: React.FC<Props> = ({  }) => {
    const className = 'InstructionsFormItem';
    return (
        <li className={className}>
            <p className={`${className}_step`}>{'1. Prepare vegetables'}</p>
            <div className={`${className}_iconContainer`}>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faX} />
            </div>            
        </li>
    );
};

export default InstructionsFormItem;