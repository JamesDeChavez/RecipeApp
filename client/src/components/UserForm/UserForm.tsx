import React, { useState } from "react";
import { User } from "../../utils/interfaces";
import InputField from "../InputField";
import { validate } from '../../utils/validate';

interface Props {
    createUser: any
};

const UserForm: React.FC<Props> = ({ createUser }) => {
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: ''
    });
    const [errors, setErrors] = useState<any>({});

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = [user.firstName, user.lastName];
        const errorMessages = ['Please enter first name.', 'Please enter last name.'];
        const validation = validate(formData, errorMessages);
        setErrors(validation);
        if(Object.keys(validation).length) return;
        try {
            await createUser({ variables: user });
            setUser({ firstName: '', lastName: '' });            
        } catch (error) {
            console.log(error);
        }        
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUser((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    return(
        <div className='UserForm'>
            <h3>Create User: </h3>
            <form onSubmit={onSubmit}>
                <InputField 
                    id='firstName'
                    placeholder='First Name'
                    value={user.firstName}
                    onChange={onChange}
                    error={errors.error0}
                />
                <InputField 
                    id='lastName'
                    placeholder='Last Name'
                    value={user.lastName}
                    onChange={onChange}
                    error={errors.error1}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UserForm;