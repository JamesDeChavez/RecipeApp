import React from "react";
import UserListItem from "../UserListItem";
import { GetAllUsersQuery } from "../../generated/graphql";

interface Props {
    data: GetAllUsersQuery
};

const className = 'UsersList';

const UsersList: React.FC<Props> = ({ data }) => {    
    return (
        <div className={className}>
            <h3>Users List: </h3>
            {(data.getAllUsers!.length === 0) ?
                <div className={`${className}_nousers`}>No Users Created</div>
            :
                <ul className={`${className}_list`}>
                    {data.getAllUsers!.map(user => {
                        return (
                            <UserListItem 
                                key={user!._id}
                                id={user!._id!}
                                firstName={user!.firstName!}
                                lastName={user!.lastName!}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default UsersList;