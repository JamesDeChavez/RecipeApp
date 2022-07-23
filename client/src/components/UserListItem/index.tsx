import { GetAllUsersDocument, useDeleteUserMutation, useUpdateUserMutation } from "../../generated/graphql";
import UserListItem from "./UserListItem";

export interface Props {
    id: string | undefined,
    firstName: string,
    lastName: string
}

const UserListItemContainer: React.FC<Props> = (props) => {

    // These mutations update the cache when completed in order to avoid an additional network call.
    // See PostListitem component to see refetchQueries alternate solution

    const updateMutation = useUpdateUserMutation({
        update(cache, { data }) {
            const users: any = cache.readQuery({
                query: GetAllUsersDocument
            });

            const updatedUserList = [];

            for (let user of users.getAllUsers) {
                if (user._id === data?.updateUser?._id) {
                    updatedUserList.push(data?.updateUser)
                } else {
                    updatedUserList.push(user);
                }
            };

            cache.writeQuery({
                query: GetAllUsersDocument,
                data: {
                    getAllUsers: [
                        ...updatedUserList
                    ]
                }
            })
        }
    });

    const deleteMutation = useDeleteUserMutation({
        update(cache, { data }) {
            const users: any = cache.readQuery({
                query: GetAllUsersDocument
            });

            const updatedUserList = users.getAllUsers.filter((user: any) => 
                user._id !== data?.deleteUser?._id
            );

            cache.writeQuery({
                query: GetAllUsersDocument,
                data: {
                    getAllUsers: [
                        ...updatedUserList
                    ]
                }
            });
        }
    });

    if (deleteMutation[1].loading) return <div>Loading...</div>;
    if (deleteMutation[1].error) return <div>ERROR</div>;
    if (deleteMutation[1].data) return <div>Delete Successful</div>;

    return <UserListItem 
                updateUser={updateMutation[0]}
                deleteUser={deleteMutation[0]}
                updateData={updateMutation[1].data} 
                {...props} 
            />
}

export default UserListItemContainer;