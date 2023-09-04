import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const Title = () => {
    const context = useContext(ThemeContext);
    if(!context) return null;
    const {theme} = context;

    return (
        <>
            <h2>This is a headline</h2>
            <p className={theme==='light'? "dark-text" : "light-text"}>
                This is a text, and more text, and even more text, and this is
                the end.
            </p>
        </>
    );
};

export default Title;
