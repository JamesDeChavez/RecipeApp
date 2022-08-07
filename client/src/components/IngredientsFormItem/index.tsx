import React from "react";
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

interface Props {

}

const IngredientsFormItem: React.FC<Props> = ({  }) => {
    const className = 'IngredientsFormItem';
    return (
        <li className={className}>
            <p className={`${className}_item`}>
                1. Chicken Breast - 2 lbs
            </p>
            <div className={`${className}_iconContainer`}>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faX} />
            </div>            
        </li>
    );
};

export default IngredientsFormItem;