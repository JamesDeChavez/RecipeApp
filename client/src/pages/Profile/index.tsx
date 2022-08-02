import { useState } from "react";
import ProfileForm from "../../components/ProfileForm";
import ViewProfile from "../../components/ViewProfile";

const mockProfile = {
    username: 'fakeUser',
    email: 'fakeemail@gmail.com',
    password: 'Fakepassword123!'
}

const Profile = () => {
    const [editActive, setEditActive] = useState(false);

    const className = 'Profile';
    return (
        <div className={className}>
            <h3>Profile Component</h3>
            {!editActive ?
                <ViewProfile profile={mockProfile} setEditActive={setEditActive} />
            :
                <ProfileForm profile={mockProfile} />
            }
        </div>
    );
};

export default Profile;