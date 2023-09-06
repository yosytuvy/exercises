import { createContext, useState } from "react";

interface PageContextType {
    page: string;
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

interface PageContextProviderProps {
    children: React.ReactNode;
}

export const PageContext = createContext<PageContextType | null>(null);

const PageContextProvider:React.FC<PageContextProviderProps> = (props) => {
    const [page, setPage] = useState<string>('home');

    return (
        <PageContext.Provider value={{page, setPage}}>
            {props.children}
        </PageContext.Provider>
    )
}

export default PageContextProvider;
