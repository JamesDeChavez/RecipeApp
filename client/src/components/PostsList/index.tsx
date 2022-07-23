import { useGetAllPostsQuery } from '../../generated/graphql';
import PostsList from './PostsList';

const PostsListContainer = () => {
    const { data, error, loading } = useGetAllPostsQuery();
    
    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>ERROR</div>;

    return <PostsList data={data} />;
};

export default PostsListContainer;