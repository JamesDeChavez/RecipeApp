import React from "react";
import { Profile } from "../../utils/interfaces";

interface Props {
    profile: Profile,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>
};

const ViewProfile: React.FC<Props> = ({ profile, setEditActive }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(prevState => !prevState);
    }
    
    const className = 'ViewProfile'
    return (
        <div className={className}>
            <h3>View Profile Component</h3>
            <ul>
                <li>
                    <div>Username:</div>
                    <div>{profile.username}</div>
                </li>
                <li>
                    <div>Email:</div>
                    <div>{profile.email}</div>
                </li>
                <li>
                    <div>Password:</div>
                    <div>{profile.password}</div>
                </li>
            </ul>
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    );
};

export default ViewProfile;