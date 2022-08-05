import React, { useState } from "react";
import Footer from "../../components/Footer";
import Landing from "../../components/Landing";
import LoginForm from "../../components/LoginForm";
import NavbarNonAuth from "../../components/NavbarNonAuth";
import RegisterForm from "../../components/RegisterForm";
import Sample from "../../components/Sample";
import './styles.css';

interface Props {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
};

const NonAuthHomePage: React.FC<Props> = ({ setAuth }) => {
    const RENDERS = ['DEFAULT', 'LOGIN', 'SIGNUP', 'SAMPLE'];
    const [render, setRender] = useState('DEFAULT');

    const className ='NonAuthHomePage';
    return (
        <div className={className}>
            <NavbarNonAuth renderConstants={RENDERS} setRender={setRender} setAuth={setAuth} />
            {
                {
                    [RENDERS[0]]: <Landing 
                        renderConstants={RENDERS} 
                        setRender={setRender}
                    />,
                    [RENDERS[1]]: <LoginForm 
                        renderConstants={RENDERS} 
                        setRender={setRender}
                    />,
                    [RENDERS[2]]: <RegisterForm 
                        renderConstants={RENDERS} 
                        setRender={setRender}
                    />,
                    [RENDERS[3]]: <Sample/>
                }[render]
            }
            <Footer />
        </div>
    )
};

export default NonAuthHomePage;

