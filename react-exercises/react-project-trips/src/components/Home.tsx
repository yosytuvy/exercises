import { useContext } from "react";
import { PageContext } from "../context/PageContextProvider";

const Home = () => {
  const context = useContext(PageContext);
  if(!context) return null;
  const {setPage} = context;

  return (
  <div>
    <h2>home page</h2>
    <button onClick={() => setPage("trips")}>All Trips</button>
    <button onClick={() => setPage("userRegistration")}>Register</button>
    <button onClick={() => setPage("userLogin")}>Login</button>
  </div>);
};

export default Home;