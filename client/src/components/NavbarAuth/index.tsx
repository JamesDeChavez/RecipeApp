import React from "react";
import { useApolloClient } from "@apollo/client";
import image from '../../assets/inkpx-word-art.png';
import './styles.css';

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>,
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

const NavbarAuth: React.FC<Props> = ({ renderConstants, setRender, setUserLoggedIn }) => {

    const client = useApolloClient();

    const logoClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[0]);
    };

    const navClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, n: number) => {
        e.preventDefault();
        setRender(renderConstants[n]);
    };

    const logout = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.preventDefault();
        client.clearStore();
        localStorage.clear();
        setUserLoggedIn(false);
    };

    const className = 'NavbarAuth';
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
                <li className={`${className}_listitem`} onClick={(e) => navClick(e, 4)}>
                    Profile
                </li>
                <li className={`${className}_listitem`} onClick={logout}>
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default NavbarAuth;