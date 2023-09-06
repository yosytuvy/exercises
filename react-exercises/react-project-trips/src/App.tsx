import { useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import NewTripForm from "./components/NewTripForm";
import TripDetail from "./components/TripDetail";
import Trips from "./components/Trips";
import UpdateTripForm from "./components/UpdateTripForm";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import { PageContext } from "./context/PageContextProvider";
import TripsContextProvider from "./context/TripsContextProvider";

function App() {
    const context = useContext(PageContext);
    if (!context) return null;
    const { page } = context;

    return (
        <TripsContextProvider>
            <div>
                {page === "home" && <Home />}
                {page === "trips" && <Trips />}
                {page === "newTripForm" && <NewTripForm />}
                {page === "tripDetail" && <TripDetail />}
                {page === "updateTripForm" && <UpdateTripForm />}
                {page === "userLogin" && <UserLogin />}
                {page === "userRegistration" && <UserRegistration />}
            </div>
        </TripsContextProvider>
    );
}

export default App;
