import { useState } from "react";
import CreateRecipeForm from "../CreateRecipeForm";
import VideoSearch from "../../components/VideoSearch";
import { Video } from "../../utils/interfaces";

const CreateRecipePage = () => {
    const [vidSelected, setVidSelected] = useState<Video | undefined>();

    const className = 'CreateRecipePage';
    return (
        <div className={className}>
            {!vidSelected ?
                <VideoSearch setVidSelected={setVidSelected}/>
            :
                <CreateRecipeForm vidSelected={vidSelected} setVidSelected={setVidSelected} />
            }
        </div>
    );
};

export default CreateRecipePage;