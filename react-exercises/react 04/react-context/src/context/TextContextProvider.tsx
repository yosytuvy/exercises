import React, { createContext, useState } from "react";

interface TextContextType{
    text:string;
    setText:React.Dispatch<React.SetStateAction<string>>;
}

interface TextContextProviderProps {
    children:React.ReactNode;
}

export const TextContext = createContext<TextContextType | null>(null);

const TextContextProvider:React.FC<TextContextProviderProps> = (props) => {
    const [text, setText] = useState<string>('hello world');

    return (
        <TextContext.Provider value={{text, setText}}>
            {props.children}
        </TextContext.Provider>
    )
}

export default TextContextProvider;