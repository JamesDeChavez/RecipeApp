import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../utils/interfaces";
import { validate } from "../../utils/validate";
import { Props as ParentProps } from './index';
import InputField from "../InputField";
import { UpdateUserMutation } from "../../generated/graphql";

interface Props extends ParentProps {
    updateUser: any,
    deleteUser: any,
    updateData: UpdateUserMutation | null | undefined
};

const UserListItem: React.FC<Props> = ({ id, firstName, lastName, updateUser, deleteUser, updateData }) => {
    const [editActive, setEditActive] = useState(false);
    const [user, setUser] = useState<User>({
        firstName: firstName,
        lastName: lastName
    });
    const [errors, setErrors] = useState<any>({});

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = [user.firstName, user.lastName];
        const errorMessages = ['Please enter first name.', 'Please enter last name.'];
        const validation = validate(formData, errorMessages);
        setErrors(validation);
        if(Object.keys(validation).length) return;
        const variables = { ...user, updateUserId: id };
        try {
            await updateUser({ variables: variables });
            setEditActive(!editActive);
        } catch (error) {
            console.log(error)
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUser((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    const editUserItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(!editActive);
    };
    
    const cancelUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setUser({
            firstName: firstName,
            lastName: lastName,
        })
        setEditActive(!editActive);
        setErrors({});
    }; 

    const deleteUserItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const authorId = (e.target as HTMLLIElement).id;
        try {
            await deleteUser({ variables: { deleteUserId: authorId }});
        } catch (error) {
            console.log(error);
        }
    };

    const className = 'UserListItem';

    return (
        <div className={className}>
            <li key={id} className={`${className}_listitem`}>
                {(editActive) ? 
                    <form onSubmit={onSubmit} className={`${className}_form`}>
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
                        <button type='submit' className={`${className}_submitButton`}>Submit</button>
                        <button onClick={cancelUpdate} className={`${className}_cancelButton`}>Cancel</button>
                    </form>
                :   
                <>
                    <span className={`${className}_spanName`}>{user.firstName}</span>
                    <span className={`${className}_spanName`}>{user.lastName}</span>
                    <Link to='/pagetwo' state={{ id: id }}>
                        <button className={`${className}_createpostButton`}>Create Post</button>
                    </Link>
                    <button onClick={editUserItem} className={`${className}_editButton`}>Edit</button>
                    <button id={id} onClick={deleteUserItem} className={`${className}_cancelButton`}>Delete</button>
                    { updateData ? <span>Update Successful</span> : <></> }
                </>
                }
            </li>
        </div>
    );
};

export default UserListItem;