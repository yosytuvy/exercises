import { useContext, useState } from "react";
import { PageContext } from "../context/PageContextProvider";
import { customFetch } from "../util/fetch";

const UserRegistration = () => {
    const sendData = () => {
        const data = { email, password };
        console.log(data);

        return customFetch(`auth/register`, "POST", JSON.stringify(data))
            .then((response) => response!.json())
            .then((data) => {
                console.log(data);
                setPage("home");
            })
            .catch((err) => console.log(err));
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(PageContext);
    if (!context) return null;
    const { setPage } = context;

    return (
        <div>
            <h2>user registration page</h2>
            <button onClick={() => setPage("home")}>home</button>

            <div className="register-page">
                <h1>Register</h1>

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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserRegistration;
