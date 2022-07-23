import React, { useState } from "react";
import { UpdatePostMutation } from "../../generated/graphql";
import { Post } from "../../utils/interfaces";
import { validate } from "../../utils/validate";
import InputField from "../InputField";
import { Props as ParentProps } from './index';

interface Props extends ParentProps {
    updatePost: any,
    deletePost: any,
    updateData: UpdatePostMutation | null | undefined
};

const PostListItem: React.FC<Props> = ({ id, body, authorId, updatePost, deletePost, updateData }) => {
    const [editActive, setEditActive] = useState(false);
    const [post, setPost] = useState<Post>({
        body: body,
        authorId: authorId
    });
    const [errors, setErrors] = useState<any>({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPost((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = [post.body];
        const errorMessages = ['Please enter post'];
        const validation = validate(formData, errorMessages);
        setErrors(validation);
        if(Object.keys(validation).length) return;
        const variables = { ...post, updatePostId: id };
        try {
            await updatePost({ variables: variables });
            setEditActive(!editActive);
        } catch (error) {
            console.log(error);
        }
    };

    const deletePostItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const postId = (e.target as HTMLImageElement).id;
        try {
          await deletePost({ variables: { deletePostId: postId }});  
        } catch (error) {
            console.log(error);
        };
    }

    const editPostItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(!editActive);
    };

    const cancelUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setPost({...post, body: body});
        setEditActive(!editActive);
        setErrors({});
    };

    const className='PostListItem';

    return (
        <li className={`${className}`}>
            {(editActive) ? 
                <form onSubmit={onSubmit} className={`${className}_form`}>
                    <InputField
                        id='body'
                        placeholder='Enter post here'
                        value={post.body}
                        onChange={onChange}
                        error={errors.error0}
                    />
                    <div className={`${className}_authorId`}>Author ID: {post.authorId}</div>
                    <button type='submit' className={`${className}_submitButton`}>Submit</button>
                    <button onClick={cancelUpdate} className={`${className}_cancelButton`}>Cancel</button>
                </form>
            :
            <>
                <div className={`${className}_body`}>Post: {post.body}</div>
                <div className={`${className}_authorId`}>Author ID: {post.authorId}</div>
                <button onClick={editPostItem} className={`${className}_editButton`}>Edit</button>
                <button id={id} onClick={deletePostItem} className={`${className}_deleteButton`}>Delete</button>
                {updateData ? <div>Update Successful</div> : <></> }
            </>    
            }
        </li>
    );
};

export default PostListItem;