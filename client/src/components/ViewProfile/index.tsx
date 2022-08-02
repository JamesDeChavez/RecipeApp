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
            <div>{profile.username}</div>
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    );
};

export default ViewProfile;