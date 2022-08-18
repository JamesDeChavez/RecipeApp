import React from "react";
import { Video } from "../../utils/interfaces";
import CreateFormVid from "../../components/CreateFormVid";
import CreateFormNoVid from "../../components/CreateFormNoVid";

interface Props {
    vidSelected: Video,
    setVidSelected: React.Dispatch<React.SetStateAction<Video | undefined>>
}

const CreateRecipe: React.FC<Props> = ({ vidSelected, setVidSelected }) => {

    const className = 'CreateRecipe';
    return (
        <div className={className}>
            {vidSelected.videoId !== 'N/A' ?
                <CreateFormVid vidSelected={vidSelected} setVidSelected={setVidSelected} />
            :
                <CreateFormNoVid vidSelected={vidSelected} setVidSelected={setVidSelected} />
            }
        </div>
    );
};

export default CreateRecipe;