import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const ThemeSwitcher = () => {

    const changeTheme = () => {
        setIsLight(!isLight);
        if(isLight) return 'light';
        return 'dark';
    }

    const context = useContext(ThemeContext);
    const [isLight, setIsLight] = useState(false);
    if(!context) return null;
    const {theme, setTheme} = context;
    return <>
        <br/>
        <br/>
        <button onClick={() => {
            setTheme(changeTheme())
        }}>Change Theme</button>
        
        <p className="title-text">{theme}</p>
    </>;
};

export default ThemeSwitcher;
