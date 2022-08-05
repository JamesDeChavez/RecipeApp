import { useState } from "react";
import AuthHomePage from "../AuthHome";
import NonAuthHomePage from "../NonAuthHome";

const HomePage = () => {
    const [auth, setAuth] = useState(false)

    const className = 'HomePage';
    return (
        <div className={className}>
            {!auth ?
                <NonAuthHomePage setAuth={setAuth} />
            :
                <AuthHomePage setAuth={setAuth} />
            }
            
        </div>
    )
};

export default HomePage