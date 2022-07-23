import { GetAllPostsDocument, useCreatePostMutation } from "../../generated/graphql";
import PostForm from "./PostForm";

const PostFormContainer = () => {
    const [createPost, {loading, error, data}] = useCreatePostMutation({
        refetchQueries: [
            { query: GetAllPostsDocument }
        ]
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>ERROR</div>;
    if (data) return <div>Post Created Successfully</div>;

    return <PostForm createPost={createPost} />
};

export default PostFormContainer;

