import { useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";

const Main = () => {
    const [isVisable, setIsVisable] = useState(true);
    const context = useContext(UserContext);
    if(!context) return null;

    const {user} = context;
    return <>
        <button onClick={() => setIsVisable(!isVisable)}>
            {isVisable? "Show Details": "Hide Details"}
        </button>


        <div className={isVisable ? "hide-div" : "show-div"}>
            <p>Name: {user.name as string}</p>
            <p>Email: {user.email as string}</p>
            <p>Phone: {user.phone as string}</p>
        </div>
    </>;
};

export default Main;
