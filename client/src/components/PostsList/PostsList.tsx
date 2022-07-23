import React from "react";
import { GetAllPostsQuery } from "../../generated/graphql";
import PostListItem from "../PostListItem";

interface Props {
    data: GetAllPostsQuery,
};

const className='PostsList';

const PostsList: React.FC<Props> = ({ data }) => {
    return(
        <div className={`${className}`}>
            <h3>Posts List: </h3>
            {(data.getAllPosts!.length === 0) ?
                <div className={`${className}_noposts`}>No posts created</div>
            :
                <ul className={`${className}_list`}>
                    {data.getAllPosts!.map(post => {
                        return (
                            <PostListItem 
                                key={post!._id}
                                id={post!._id!}
                                body={post!.body!}
                                authorId={post!.authorId!}
                            />
                        )
                    })}
                </ul>            
            }
        </div>
    );
};

export default PostsList;