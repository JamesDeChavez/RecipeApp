import { useState } from "react";
import Contents from "../../components/Contents";
import CreateRecipe from "../CreateRecipe";
import ViewRecipes from "../ViewRecipes";
import Ingredients from "../Ingredients";
import Profile from "../Profile";
import NavbarAuth from "../../components/NavbarAuth";
import Footer from "../../components/Footer";
import './styles.css';

interface Props {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
};

const AuthHomePage: React.FC<Props> = ({ setAuth }) => {
    const RENDERS = ['DEFAULT', 'CREATE_RECIPE', 'VIEW_RECIPE', 'INGREDIENTS', 'PROFILE'];
    const [render, setRender] = useState('DEFAULT');

    const className = 'AuthHomePage';
    return (
        <div className={className}>
            <NavbarAuth renderConstants={RENDERS} setRender={setRender} setAuth={setAuth} />
            {
                {
                    [RENDERS[0]]: <Contents renderConstants={RENDERS} setRender={setRender} />,
                    [RENDERS[1]]: <CreateRecipe />,
                    [RENDERS[2]]: <ViewRecipes renderConstants={RENDERS} setRender={setRender}/>,
                    [RENDERS[3]]: <Ingredients />,
                    [RENDERS[4]]: <Profile /> ,
                }[render]
            }
            <Footer />
        </div>
    );
};

export default AuthHomePage;