import { GetAllUsersDocument, useCreateUserMutation } from '../../generated/graphql';
import UserForm from './UserForm';

const UserFormContainer = () => {

    // This create mutation updates the cache when completed in order to avoid an additional network call.
    // See PostForm component to see refetchQueries alternate solution

    const [createUser, {loading, error, data}] = useCreateUserMutation({
        update(cache, { data }) {
            const users: any = cache.readQuery({
                query: GetAllUsersDocument
            });

            cache.writeQuery({
                query: GetAllUsersDocument,
                data: {
                    getAllUsers: [
                        data?.createUser,
                        ...users.getAllUsers
                    ]
                }
            })
        }
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>ERROR</div>;
    if (data) return <div>User Created Successfully</div>;

    return <UserForm createUser={createUser} />;
};

export default UserFormContainer;