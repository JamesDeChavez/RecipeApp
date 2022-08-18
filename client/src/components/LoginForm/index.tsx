import React, { useEffect, useState } from 'react';
import { LoginInputs } from '../../utils/interfaces';
import './styles.css';

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
};

const LoginForm: React.FC<Props> = ({ renderConstants, setRender }) => {
    const [loginInputs, setLoginInputs] = useState<LoginInputs>({
        username: '',
        password: ''
    });

    const [errMsg, setErrMsg] = useState('error');

    useEffect(() => {
        setErrMsg('');
    }, [loginInputs]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLoginInputs((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginInputs);
    };

    const goToSignup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[2]);
    };

    const className = 'LoginForm';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_imageContainer`}>
                    <div className={`${className}_overlay`}></div>
                </div>
                <form onSubmit={handleSubmit} className={`${className}_form`}>
                    <h3 className={`${className}_header`}>Login</h3>
                    <input 
                        type='text'
                        id='username'
                        placeholder='* Username'
                        autoComplete='off'
                        value={loginInputs.username}
                        onChange={handleChange}
                        className={`${className}_input`}
                        required
                    />
                    <input 
                        type='password'
                        id='password'
                        placeholder='* Password'
                        value={loginInputs.password}
                        onChange={handleChange}
                        className={`${className}_input`}
                        required
                    />
                    <div className={`${className}_buttonContainer`}>                
                        <button 
                            type='submit'
                            className={`${className}_button`}
                            disabled={!loginInputs.username || !loginInputs.password ? true : false} 
                        >Sign In</button>
                    </div>
                    <p className={`${className}_text`}>
                        Don't have an account?<br/>
                        <a className={`${className}_link`} onClick={goToSignup}>Sign Up</a>         
                    </p>
                </form>
            </div>                
        </div>
    )
};

export default LoginForm;