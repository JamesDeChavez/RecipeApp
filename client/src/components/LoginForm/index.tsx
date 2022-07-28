import { useEffect, useState } from 'react';
import { LoginInputs } from '../../utils/interfaces';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';


const LoginForm = () => {
    const [loginInputs, setLoginInputs] = useState<LoginInputs>({
        username: '',
        password: ''
    });

    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setErrMsg('');
    }, [loginInputs]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLoginInputs((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginInputs);
        navigate('/contents')
    }

    const className = 'LoginForm';

    return (
        <div className={className}>
            <form onSubmit={onSubmit} className={`${className}_form`}>
                <p className={errMsg ? `${className}_errMsg` : `${className}_hidden`}>
                    {errMsg}
                </p>
                <h1>Login</h1>
                <label htmlFor='username'>Username:</label>
                <input 
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={loginInputs.username}
                    onChange={onChange}
                    required
                />
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password'
                    id='password'
                    value={loginInputs.password}
                    onChange={onChange}
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
                    <Link to='/register'>Sign Up</Link>
                </p>
            </form>
        </div>
    )
};

export default LoginForm;