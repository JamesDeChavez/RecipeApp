import { useState } from "react";
import RecipeForm from "../../components/RecipeForm";
import VideoSearch from "../../components/VideoSearch";
import { Video } from "../../utils/interfaces";

const NewRecipe = () => {

    const [selectedVideo, setSlectedVideo] = useState<Video | undefined>();

    return (
        <div className='NewRecipe'>
            <h3>Create New Recipe</h3>
            {!selectedVideo ?
                <VideoSearch setSelectedVideo={setSlectedVideo} />                  
            :
                <RecipeForm selectedVideo={selectedVideo} setSelectedVideo={setSlectedVideo} />
            }       
        </div>
    )
}

export default NewRecipe;