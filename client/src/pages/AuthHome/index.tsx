import { useState } from "react";
import Contents from "../../components/Contents";
import CreateRecipe from "../CreateRecipePage";
import ViewRecipes from "../ViewRecipes";
import NavbarAuth from "../../components/NavbarAuth";
import Footer from "../../components/Footer";
import IngredientsList from "../../components/IngredientsList";
import Profile from "../../components/Profile";
import { sampleUser as SU } from "../../utils/sampleUser";
import { User } from "../../utils/interfaces";
import './styles.css';

interface Props {
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

const AuthHomePage: React.FC<Props> = ({ setUserLoggedIn }) => {
    const RENDERS = ['DEFAULT', 'CREATE_RECIPE', 'VIEW_RECIPE', 'INGREDIENTS', 'PROFILE'];
    const [render, setRender] = useState('DEFAULT');

    const className = 'AuthHomePage';
    return (
        <div className={className}>
            <NavbarAuth renderConstants={RENDERS} setRender={setRender} setUserLoggedIn={setUserLoggedIn} />
            {
                {
                    [RENDERS[0]]: <Contents renderConstants={RENDERS} setRender={setRender} />,
                    [RENDERS[1]]: <CreateRecipe />,
                    [RENDERS[2]]: <ViewRecipes renderConstants={RENDERS} setRender={setRender}/>,
                    [RENDERS[3]]: <IngredientsList renderConstants={RENDERS} setRender={setRender} />,
                    [RENDERS[4]]: <Profile userData={SU} /> ,
                }[render]
            }
            <Footer />
        </div>
    );
};

export default AuthHomePage;