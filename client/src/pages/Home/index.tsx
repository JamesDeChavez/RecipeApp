import { useEffect, useState } from "react";
import { useViewerQuery } from "../../generated/graphql";
import AuthHomePage from "../AuthHome";
import NonAuthHomePage from "../NonAuthHome";

const HomePage = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const {data, loading, error} = useViewerQuery();

    useEffect(() => {
        data && data.viewer && setUserLoggedIn(true);
    }, [data])

    const className = 'HomePage';
    return (
        <div className={className}>
            {!userLoggedIn ?
                <NonAuthHomePage setUserLoggedIn={setUserLoggedIn} />
            :
                <AuthHomePage setUserLoggedIn={setUserLoggedIn} />
            }
            
        </div>
    )
};

export default HomePage