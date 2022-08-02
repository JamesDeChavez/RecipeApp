import React from "react";
import { Profile } from "../../utils/interfaces";

interface Props {
    profile: Profile 
};

const ProfileForm: React.FC<Props> = ({ profile }) => {
    const className = 'ProfileForm'
    return (
        <div className={className}>
            <h3>Profile Form Component</h3>
            <div>{profile.username}</div>
        </div>
    );
};

export default ProfileForm;