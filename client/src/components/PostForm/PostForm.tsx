import InputField from "../InputField";
import React, { useEffect, useState } from "react";
import { Post } from '../../utils/interfaces'
import { useLocation, useNavigate } from "react-router-dom";
import { validate } from "../../utils/validate";

interface Location {
    id: string
};

interface Props {
    createPost: any
};

const PostForm: React.FC<Props> = ({ createPost }) => {
    const [post, setPost] = useState<Post>({
        body: '',
        authorId: ''
    });
    const [errors, setErrors] = useState<any>({});
    
    const navigate = useNavigate();
    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = [post.body];
        const errorMessages = ['Please enter post'];
        const validation = validate(formData, errorMessages);
        setErrors(validation);
        if(Object.keys(validation).length) return;
        
        try {
            await createPost({ variables: post });
            setPost({body: '', authorId: ''});
            navigate('/');  
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPost((prevState) => ({ ...prevState, [e.target.id]: value }));
    };

    const location = useLocation();
    const locationState = location.state as Location;

    useEffect(() => {
        if('id' in locationState) {
            setPost({
                ...post,
                authorId: locationState.id
            });
        }
    }, [locationState, post]);

    return (
        <div className='PostForm'>
            <h3>Create Post</h3>
            <form onSubmit={onSubmit}>
                <InputField 
                    id='body'
                    placeholder='Enter post here'
                    value={post.body}
                    onChange={onChange}
                    error={errors.error0}
                />
                <div>AuthorID: {post.authorId}</div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default PostForm;