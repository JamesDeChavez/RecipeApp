import { useState } from "react";
import AuthHomePage from "../AuthHome";
import NonAuthHomePage from "../NonAuthHome";

const HomePage = () => {
    const [auth, setAuth] = useState(false)
    
    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setAuth(prevState => !prevState);
    };

    const className = 'HomePage';
    return (
        <div className={className}>
            <button onClick={onClick}>Authorize</button>
            {!auth ?
                <NonAuthHomePage/>
            :
                <AuthHomePage/>
            }
            
        </div>
    )
};

export default HomePage