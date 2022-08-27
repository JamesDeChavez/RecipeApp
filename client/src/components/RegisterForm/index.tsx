import React from "react";
import { useCreateUserMutation } from "../../generated/graphql";
import RegisterForm from "./RegisterForm";

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>,
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

const RegisterFormContainer: React.FC<Props> = (props) => {
    const [createUser, {loading, error, data}] = useCreateUserMutation();

    if (loading) return <div>Loading...</div>;
    if (error) console.log(error);
    if (data) console.log('user created successfully')
    
    return <RegisterForm createUser={createUser} {...props} />;
};

export default RegisterFormContainer;

    
