import { Link } from 'react-router-dom';
import PostForm from '../../components/PostForm';
import './styles.css';

const PageTwo = () => {
    return (
        <div className='PageTwo'>
            <h3>Page Two</h3>
            <Link to='/'>Return to Home Page</Link>
            <PostForm />
        </div>
    )
}

export default PageTwo;