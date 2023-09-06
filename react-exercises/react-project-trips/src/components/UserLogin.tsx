import { useContext, useState } from "react";
import { PageContext } from "../context/PageContextProvider";
import { customFetch } from "../util/fetch";

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendData = () => {
        const data = { email, password };
        
        return customFetch(`auth/login`, "POST", JSON.stringify(data))
            .then((response) => response!.json())
            .then((data) => {
                console.log(data.message);
                const token = data.responseObj.token;
                localStorage.setItem("token", token);
                console.log(localStorage.getItem("token"));
                setPage("home");
            })
            .catch((err) => console.log(err));
    };

    const context = useContext(PageContext);
    if (!context) return null;
    const { setPage } = context;

    return (
        <div>
            <h2>user login page</h2>
            <button onClick={() => setPage("home")}>Home</button>

            <div className="register-page">
                <h1>Login</h1>

                <form>
                    <label>
                        Email:
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            sendData();
                        }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
