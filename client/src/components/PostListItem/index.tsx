import React from 'react';
import { GetAllPostsDocument, useDeletePostMutation, useUpdatePostMutation } from '../../generated/graphql';
import PostListItem from './PostListItem';

export interface Props {
    id: string | undefined,
    body: string,
    authorId: string,
};

const PostListItemContainer: React.FC<Props> = (props) => {
    const updateMutation = useUpdatePostMutation();
    const deleteMutation = useDeletePostMutation({
        refetchQueries: [
            { query: GetAllPostsDocument },
            'GetAllPosts'
        ]
    });

    if (deleteMutation[1].loading) return <div>Loading...</div>;
    if (deleteMutation[1].error) return <div>ERROR</div>;
    if (deleteMutation[1].data) return <div>Delete Successful</div>;

    return <PostListItem 
        updatePost={updateMutation[0]}
        deletePost={deleteMutation[0]}
        updateData={updateMutation[1].data}
        {...props} 
    />;
};

export default PostListItemContainer;