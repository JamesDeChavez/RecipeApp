import React, { useEffect, useState } from 'react';
import { USER_REGEX, EMAIL_REGEX, PWD_REGEX } from '../../utils/regex';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RegisterFocus, RegisterInputs, RegisterValidChecks } from '../../utils/interfaces';
import './styles.css';

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
};

const RegisterForm: React.FC<Props> = ({ renderConstants, setRender }) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRegisterInputs((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocus({ ...focus, [e.target.id]: true });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocus({ ...focus, [e.target.id]: false });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const valid1 = USER_REGEX.test(registerInputs.username);
        const valid2 = EMAIL_REGEX.test(registerInputs.email);
        const valid3 = PWD_REGEX.test(registerInputs.password);
        if (!valid1 || !valid2 || !valid3) {
            setErrMsg('Invalid Entry');
            return;
        }
        console.log(registerInputs);
    };

    const goToLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[1]);
    };

    const className = 'RegisterForm';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_imageContainer`}>
                    <div className={`${className}_overlay`}></div>
                </div>
                <form onSubmit={handleSubmit} className={`${className}_form`}>
                    <h3 className={`${className}_header`}>Register</h3>
                    <input 
                        type='text'
                        id='username'
                        placeholder='* Username'
                        autoComplete='off'
                        value={registerInputs.username}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        className={`${className}_input`}
                    />
                    <p className={focus.username && registerInputs.username && !registerValid.username ? `${className}_instructions` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Username must be 4 to 24 characters<br/>
                        Must begin with a letter.<br/>
                        May only contain letters, numbers, underscors and hyphens
                    </p>
                    <input 
                        type='email'
                        id='email'
                        placeholder='* Email'
                        autoComplete='off'
                        value={registerInputs.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required 
                        className={`${className}_input`}
                    />
                    <p className={focus.email && registerInputs.email && !registerValid.email ? `${className}_instructions` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Must be a valid email address
                    </p>
                    <input 
                        type='password'
                        id='password'
                        placeholder='* Password'
                        value={registerInputs.password}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        className={`${className}_input`}
                    />
                    <p className={focus.password && !registerValid.password ? `${className}_instructions` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Passwords must be 8 to 24 characters<br/>
                        Must have at lease one uppercase letter, one lowercase letter, a number and a special character.<br/>
                    </p>
                    <input 
                        type='password'
                        id='confirmPW'
                        placeholder='* Confirm Password'
                        value={registerInputs.confirmPW}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        className={`${className}_input`}
                    />
                    <p className={focus.confirmPW && !registerValid.confirmPW ? `${className}_instructions` : `${className}_hidden`}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Must match the first password input provided.
                    </p>
                    <div className={`${className}_buttonContainer`}>
                        <button 
                            type='submit'
                            className={`${className}_button`}
                            disabled={!registerValid.username || !registerValid.email || !registerValid.password || !registerValid.confirmPW ? true : false} 
                        >Sign Up</button>
                    </div>
                    <p className={`${className}_text`}>
                        Already registered?<br/>
                        <a className={`${className}_link`} onClick={goToLogin}>Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default RegisterForm;