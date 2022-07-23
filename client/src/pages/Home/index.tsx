import PostsList from '../../components/PostsList';
import UserForm from '../../components/UserForm';
import UsersList from '../../components/UsersList';
import './styles.css';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <h3>Home Page</h3>
            <UserForm />
            <UsersList />
            <PostsList />
        </div>
    )
}

export default HomePage;