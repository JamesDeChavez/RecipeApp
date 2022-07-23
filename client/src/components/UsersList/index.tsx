import { useGetAllUsersQuery } from "../../generated/graphql";
import UserList from './UsersList';

const UsersListContainer = () => {
    const { data, error, loading } = useGetAllUsersQuery();

    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>ERROR</div>;

    return <UserList data={data} />;
};

export default UsersListContainer;