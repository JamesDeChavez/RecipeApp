import React, { useState } from "react";
import { Profile } from "../../utils/interfaces";

interface Props {
    profile: Profile,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>> 
};

const ProfileForm: React.FC<Props> = ({ profile, setEditActive }) => {
    const [inputs, setInputs] = useState({
        username: profile.username,
        email: profile.email,
        password: profile.password
    });

    const cancelEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputs(prevState => ({ ...prevState, [e.target.id]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedProfile = {
            _id: profile._id,
            username: inputs.username,
            email: inputs.email,
            password: inputs.password
        };
        console.log(updatedProfile);
    };

    const className = 'ProfileForm'
    return (
        <div className={className}>
            <h3>Profile Form Component</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input 
                    type="text"
                    id='username'
                    value={inputs.username}
                    onChange={handleChange}
                    autoComplete='off'
                />
                <label htmlFor='email'>Email:</label>
                <input 
                    type="text"
                    id='email'
                    value={inputs.email}
                    onChange={handleChange}
                    autoComplete='off'
                />
                <label htmlFor='password'>Password:</label>
                <input 
                    type="text"
                    id='password'
                    value={inputs.password}
                    onChange={handleChange}
                    autoComplete='off'
                />
                <button type='submit'>Submit</button>
                <button onClick={cancelEdit}>Cancel</button>
            </form>
        </div>
    );
};

export default ProfileForm;