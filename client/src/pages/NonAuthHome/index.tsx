import { useState } from "react";
import Landing from "../../components/Landing";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import Sample from "../../components/Sample";

const NonAuthHomePage = () => {
    const RENDERS = ['DEFAULT', 'LOGIN', 'SIGNUP', 'SAMPLE'];
    const [render, setRender] = useState('DEFAULT');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, renderOption: string) => {
        e.preventDefault();
        setRender(renderOption);
    }; 

    const className ='NonAuthHomePage';
    return (
        <div className={className}>
            <h3>Non-Authorized Home Page</h3>
            <button onClick={(e) => handleClick(e, RENDERS[0])}>Default</button>
            <button onClick={(e) => handleClick(e, RENDERS[1])}>Login</button>
            <button onClick={(e) => handleClick(e, RENDERS[2])}>Signup</button>
            <button onClick={(e) => handleClick(e, RENDERS[3])}>Sample</button>
            {
                {
                    [RENDERS[0]]: <Landing/>,
                    [RENDERS[1]]: <LoginForm/>,
                    [RENDERS[2]]: <RegisterForm/>,
                    [RENDERS[3]]: <Sample/>
                }[render]
            }
        </div>
    )
};

export default NonAuthHomePage;

