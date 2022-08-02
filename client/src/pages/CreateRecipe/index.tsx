import { useState } from "react";
import CreateRecipeForm from "../../components/CreateRecipeForm";
import VideoSearch from "../../components/VideoSearch";
import { Video } from "../../utils/interfaces";

const CreateRecipe = () => {
    const [vidSelected, setVidSelected] = useState<Video | undefined>();

    const className = 'CreateRecipe';
    return (
        <div className={className}>
            <h3>Create Recipe Page</h3>
            {!vidSelected ?
                <VideoSearch setVidSelected={setVidSelected}/>
            :
                <CreateRecipeForm vidSelected={vidSelected} setVidSelected={setVidSelected} />
            }
        </div>
    );
};

export default CreateRecipe;