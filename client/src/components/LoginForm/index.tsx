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
            <form onSubmit={handleSubmit} className={`${className}_form`}>
                <h3 className={`${className}_header`}>Login</h3>
                <label htmlFor='username'>Username:</label>
                <input 
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={loginInputs.username}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password'
                    id='password'
                    value={loginInputs.password}
                    onChange={handleChange}
                    required
                />                
                <button 
                    type='submit'
                    disabled={!loginInputs.username || !loginInputs.password ? true : false} 
                >
                    Sign In
                </button>
                <p>
                    Don't have an account?<br/>
                    <a className={`${className}_link`} onClick={goToSignup}>Sign Up</a>
                    
                </p>
            </form>
        </div>
    )
};

export default LoginForm;