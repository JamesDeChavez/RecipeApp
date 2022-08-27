import React from "react";
import image from '../../assets/inkpx-word-art.png';
import './styles.css';

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
};

const NavbarNonAuth: React.FC<Props> = ({ renderConstants, setRender }) => {

    const logoClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[0]);
    };

    const navClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, n: number) => {
        e.preventDefault();
        setRender(renderConstants[n]);
    };

    const className = 'NavbarNonAuth';
    return (
        <div className={className}>
            <div className={`${className}_logoContainer`}>
                <img 
                    src={image} 
                    alt="logo" 
                    onClick={logoClick}
                    className={`${className}_logo`}
                />
            </div>
            <ul className={`${className}_list`}>
                <li className={`${className}_listitem`} onClick={(e) => navClick(e, 1)}>
                    Login
                </li>
                <li className={`${className}_listitem`} onClick={(e) => navClick(e, 2)}>
                    Signup
                </li>
            </ul>
        </div>
    );
};

export default NavbarNonAuth;