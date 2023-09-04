import { useContext } from "react";
import { TextContext } from "../context/TextContextProvider";

const Child = () => {

    const context = useContext(TextContext);
    if(!context) return null;

    const {text} = context;

    return <>
    <p>{text}</p>
    <br/>
    </>;
};

export default Child;
