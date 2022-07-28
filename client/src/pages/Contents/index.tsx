import { Link } from "react-router-dom";

const Contents = () => {
    return (
        <div className='Contents'>
            <h3>James' Recipe Book</h3>
            <Link to='/recipes'>View Recipes</Link>
            <Link to='/newrecipe'>Create New Recipe</Link>
            <Link to='/ingredients'>View Ingredients List</Link>
        </div>
    )
};

export default Contents;