import { createContext, useState, useEffect } from "react";
import {sample} from 'lodash';

interface UserContextType {
    user: Record<string, unknown>;
    setUser: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}

interface UserContextProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType|null>(null);

const UserContextProvider:React.FC<UserContextProviderProps> = (props) => {

    const [user, setUser] = useState<Record<string, unknown>>({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users ")
            .then(res => res.json())
            .then((data) => {
                const randUser = sample(data);
                if(randUser) setUser(randUser);
            })
            .catch(err => {throw new Error(err)})
    }, [])


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;