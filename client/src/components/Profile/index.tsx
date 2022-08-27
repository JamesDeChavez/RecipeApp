import React, { useEffect, useState } from 'react';
import { User } from '../../utils/interfaces';
import './styles.css';

interface Props {
    userData: User 
}

const Profile: React.FC<Props> = ({ userData }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [editActive, setEditActive] = useState(false);

    useEffect(() => {
        setUsername(userData.username);
        setEmail(userData.email);
    }, [userData]);

    const handleEditClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(prevState => !prevState);
    };

    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('delete')
    };

    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const updatedProfile: User = {
            username,
            email
        }
        console.log(updatedProfile)
        setEditActive(false);
    };

    const className = 'Profile';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_imageContainer`}>
                    <div className={`${className}_overlay`}></div>
                </div>
                
                <div className={`${className}_rightContainer`}>
                    <h3 className={`${className}_header`}>Your Profile</h3>
                    <ul className={`${className}_profileList`}>
                        <li className={`${className}_profileItem`}>
                            <span className={`${className}_label`}>Username:</span>
                            {editActive ?
                               <input 
                                    type="text"
                                    id='username'
                                    name='username' 
                                    value={username}
                                    className={`${className}_input`} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    autoComplete='off'
                                /> 
                            :
                                <span>{username}</span>
                            }
                            
                        </li>
                        <li className={`${className}_profileItem`}>
                            <span className={`${className}_label`}>Email:</span>
                            {editActive ?
                                <input 
                                    type="text" 
                                    id='email'
                                    name='email'
                                    value={email}
                                    className={`${className}_input`} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    autoComplete='off'
                                />
                            :
                                <span>{email}</span>
                            }
                        </li>
                        <li className={`${className}_profileItem`}>
                            <span className={`${className}_label`}>Number of Recipes:</span>                            
                            <span>{`${userData.recipes?.length} recipes`}</span>                            
                        </li>
                        <li className={`${className}_profileItem`}>
                            <span className={`${className}_label`}>Number of Ingredients:</span>
                            <span>{`${userData.ingredients?.length} items`}</span>
                        </li>
                    </ul>
                    <div className={`${className}_buttonContainer`}>
                        
                        {editActive ? 
                            <button className={`${className}_button`} onClick={handleSaveClick}>Save Profile</button>
                        : <></>}

                        <button className={`${className}_button`} onClick={handleEditClick}>
                            {!editActive ? 'Edit Profile' : 'Cancel Edit' }
                        </button>
                        <button className={`${className}_button`} onClick={handleDeleteClick}>Delete Account</button>
                    </div>
                </div>
                    
            </div>
        </div>
    );
};

export default Profile;