import React from 'react';
import { useLoginUserMutation } from '../../generated/graphql';
import LoginForm from './LoginForm';

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

const LoginFormContainer: React.FC<Props> = (props) => {
    const [loginUser, { data, error, loading }] = useLoginUserMutation();

    if (loading) return <div>Loading...</div>;
    if (error) console.log(error);
    if (data) console.log('login successful');

    return <LoginForm loginUser={loginUser} {...props} />
}

export default LoginFormContainer;