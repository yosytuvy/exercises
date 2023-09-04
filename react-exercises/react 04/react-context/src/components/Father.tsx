import { useContext, useState } from "react";
import Child from "./Child";
import { TextContext } from "../context/TextContextProvider";

const Father = () => {
    const context = useContext(TextContext);
    const [updateText, setUpdateText] = useState('');
    if(!context) return null;
    const {setText} = context;

    return (
        <>
            <Child />
            <input  onChange={(e) => setUpdateText(e.target.value)} 
                    type="text"
                    placeholder="Enter Text"></input>
            <button onClick={
                () => setText(updateText)
            }>Update</button>
        </>
    );
};

export default Father;
