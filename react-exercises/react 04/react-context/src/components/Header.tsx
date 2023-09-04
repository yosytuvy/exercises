import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const Header = () => {
    const context = useContext(UserContext);
    if(!context) return null;
    const {user} = context;
    const username = user.username as string;

    return <>
    <p>Username: {username}</p>
    </>;
};

export default Header;
