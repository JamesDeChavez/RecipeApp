import React, { useState } from "react";
import Footer from "../../components/Footer";
import Landing from "../../components/Landing";
import LoginForm from "../../components/LoginForm";
import NavbarNonAuth from "../../components/NavbarNonAuth";
import RecipeComponent from "../../components/RecipeComponent";
import RegisterForm from "../../components/RegisterForm";
import { User } from "../../utils/interfaces";
import { sampleRecipe as SR } from "../../utils/sampleRecipe";
import './styles.css';

interface Props {
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

const NonAuthHomePage: React.FC<Props> = ({ setUserLoggedIn }) => {
    const RENDERS = ['DEFAULT', 'LOGIN', 'SIGNUP', 'SAMPLE'];
    const [render, setRender] = useState('DEFAULT');

    const className ='NonAuthHomePage';
    return (
        <div className={className}>
            <NavbarNonAuth renderConstants={RENDERS} setRender={setRender} />
            {{
                [RENDERS[0]]: <Landing renderConstants={RENDERS} setRender={setRender} />,
                [RENDERS[1]]: <LoginForm renderConstants={RENDERS} setRender={setRender} setUserLoggedIn={setUserLoggedIn} />,
                [RENDERS[2]]: <RegisterForm renderConstants={RENDERS} setRender={setRender} setUserLoggedIn={setUserLoggedIn} />,
                [RENDERS[3]]: <RecipeComponent recipe={SR} isSample={true} RENDERS={RENDERS} setRender={setRender} />
            }[render]}
            <Footer />
        </div>
    )
};

export default NonAuthHomePage;

