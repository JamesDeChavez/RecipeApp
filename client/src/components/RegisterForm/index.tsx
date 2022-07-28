import { useEffect, useState } from 'react';
import { USER_REGEX, EMAIL_REGEX, PWD_REGEX } from '../../utils/regex';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RegisterFocus, RegisterInputs, RegisterValidChecks } from '../../utils/interfaces';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';


const RegisterForm = () => {
    const [registerInputs, setRegisterInputs] = useState<RegisterInputs>({
        username: '',
        email: '',
        password: '',
        confirmPW: ''
    });

    const [registerValid, setRegisterValid] = useState<RegisterValidChecks>({
        username: false,
        email: false,
        password: false,
        confirmPW: false
    });

    const [focus, setFocus] = useState<RegisterFocus>({
        username: false,
        email: false,
        password: false,
        confirmPW: false
    });

    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    
    useEffect(() => {
        const result = USER_REGEX.test(registerInputs.username);
        setRegisterValid((prevState) => ({ ...prevState, username: result }));
    }, [registerInputs.username]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(registerInputs.email);
        setRegisterValid((prevState) => ({ ...prevState, email: result }));
    }, [registerInputs.email]);

    useEffect(() => {
        const result = PWD_REGEX.test(registerInputs.password);
        const match = registerInputs.password === registerInputs.confirmPW;
        setRegisterValid((prevState) => ({ ...prevState, password: result, confirmPW: match }));
    }, [registerInputs.password, registerInputs.confirmPW]);

    useEffect(() => {
        setErrMsg('');
    }, [registerInputs]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRegisterInputs((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocus({ ...focus, [e.target.id]: true });
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocus({ ...focus, [e.target.id]: false });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const valid1 = USER_REGEX.test(registerInputs.username);
        const valid2 = EMAIL_REGEX.test(registerInputs.email);
        const valid3 = PWD_REGEX.test(registerInputs.password);
        if (!valid1 || !valid2 || !valid3) {
            setErrMsg('Invalid Entry');
            return;
        }
        console.log(registerInputs);
        navigate('/contents')
    }

    const className = 'RegisterForm';

    return (
        <div className={className}>
            <form onSubmit={onSubmit} className={`${className}_form`}>
                <p className={errMsg ? `${className}_errMsg` : `${className}_hidden`}>
                    {errMsg}
                </p>
                <h1>Register</h1>
                <label htmlFor='username'>
                    Username:
                    <span className={registerValid.username ? `${className}_check` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={registerValid.username || !registerInputs.username ? `${className}_hidden` : `${className}_times`}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input 
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={registerInputs.username}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                />
                <p className={focus.username && registerInputs.username && !registerValid.username ? `${className}_instructions` : `${className}_hidden`}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    Username must be 4 to 24 characters<br/>
                    Must begin with a letter.<br/>
                    May only contain letters, numbers, underscors and hyphens
                </p>
                <label htmlFor='email'>
                    Email:
                    <span className={registerValid.email ? `${className}_check` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={registerValid.email || !registerInputs.email ? `${className}_hidden` : `${className}_times`}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input 
                    type='email'
                    id='email'
                    autoComplete='off'
                    value={registerInputs.email}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required 
                />
                <p className={focus.email && registerInputs.email && !registerValid.email ? `${className}_instructions` : `${className}_hidden`}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    Must be a valid email address
                </p>
                <label htmlFor='password'>
                    Password:
                    <span className={registerValid.password ? `${className}_check` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={registerValid.password || !registerInputs.password ? `${className}_hidden` : `${className}_times`}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input 
                    type='password'
                    id='password'
                    value={registerInputs.password}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                />
                <p className={focus.password && !registerValid.password ? `${className}_instructions` : `${className}_hidden`}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    Passwords must be 8 to 24 characters<br/>
                    Must have at lease one uppercase letter, one lowercase letter, a number and a special character.<br/>
                </p>
                <label htmlFor='confirmPW'>
                    Confirm Password:
                    <span className={registerValid.confirmPW && registerInputs.confirmPW ? `${className}_check` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={registerValid.confirmPW || !registerInputs.confirmPW ? `${className}_hidden` : `${className}_times`}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input 
                    type='password'
                    id='confirmPW'
                    value={registerInputs.confirmPW}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                />
                <p className={focus.confirmPW && !registerValid.confirmPW ? `${className}_instructions` : `${className}_hidden`}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    Must match the first password input provided.
                </p>
                <button 
                    type='submit'
                    disabled={!registerValid.username || !registerValid.email || !registerValid.password || !registerValid.confirmPW ? true : false} 
                >
                    Sign Up
                </button>
                <p>
                    Already registerd?<br/>
                    <Link to='/login'>Sign In</Link>
                </p>
            </form>
        </div>
    )
};

export default RegisterForm;