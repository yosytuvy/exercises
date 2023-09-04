import React, { createContext, useState } from "react";

interface ThemeContextType{
    theme:"dark" | "light";
    setTheme:React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

interface ThemeContextProviderProps {
    children:React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider:React.FC<ThemeContextProviderProps> = (props) => {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;