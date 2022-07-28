import { Link } from "react-router-dom";

const HomePage2 = () => {
    return (
        <div className='HomePage2'>
            <h3>Home Page</h3>
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Sign In</Link>
        </div>
    )
};

export default HomePage2