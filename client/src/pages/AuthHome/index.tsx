import { useState } from "react";
import Contents from "../../components/Contents";
import CreateRecipe from "../CreateRecipe";
import ViewRecipes from "../ViewRecipes";
import Ingredients from "../Ingredients";
import Profile from "../Profile";

const AuthHomePage = () => {
    const RENDERS = ['DEFAULT', 'CREATE_RECIPE', 'VIEW_RECIPE', 'INGREDIENTS', 'PROFILE'];
    const [render, setRender] = useState('DEFAULT');

    const className = 'AuthHomePage';
    return (
        <div className={className}>
            <h3>Authorized Home Page</h3>
            {
                {
                    [RENDERS[0]]: <Contents renderConstants={RENDERS} setRender={setRender} />,
                    [RENDERS[1]]: <CreateRecipe />,
                    [RENDERS[2]]: <ViewRecipes />,
                    [RENDERS[3]]: <Ingredients />,
                    [RENDERS[4]]: <Profile /> ,
                }[render]
            }
        </div>
    );
};

export default AuthHomePage;