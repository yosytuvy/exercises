import { useContext } from "react";
import "./App.css";
import Grandpa from "./components/Grandpa";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Title from "./components/Title";
import TextContextProvider from "./context/TextContextProvider";
import { ThemeContext } from "./context/ThemeContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;
    return (
        <>
            <div className={theme === "light" ? "light-theme":"dark-theme"}>
                <TextContextProvider>
                    <Grandpa />
                    <Title />
                    <ThemeSwitcher />
                </TextContextProvider>
                <UserContextProvider>
                  <Header/>
                  <Main/>
                </UserContextProvider>
            </div>
        </>
    );
}

export default App;
