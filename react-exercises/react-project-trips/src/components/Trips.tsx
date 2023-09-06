import { useContext, useEffect, useState } from "react";
import { PageContext } from "../context/PageContextProvider";
import { TripsContext } from "../context/TripsContextProvider";
import { customFetch } from "../util/fetch";

type Trip = Record<string, string>[];

const Trips = () => {
    const deleteTrip = (id: string) => {
        const token = localStorage.getItem("token") || "";

        return customFetch(`trips/${id}`, "DELETE", "", token)
            .then((response) => {
                if (response!.ok) {
                    const newTrips = pageTrips.filter((trip) => trip.id !== id);
                    setPageTrips(newTrips);
                }
            })
            .catch((err) => console.log(err));
    };
    
    const [pageTrips, setPageTrips] = useState<Trip>([{}]);

    useEffect(() => {
        customFetch("trips", "GET")
            .then((res) => res!.json())
            .then((data) => {
                if (tripsContext) {
                    const { setTrips } = tripsContext;
                    setTrips(data);
                    setPageTrips(data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const tripsContext = useContext(TripsContext);
    const pageContext = useContext(PageContext);

    if (!pageContext) return null;
    const { setPage } = pageContext;

    if (!tripsContext) return null;
    const { setCurrentTrip } = tripsContext;

    return (
        <div className="trips-page">
            <h1>My Trips</h1>
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("newTripForm")}>Add Trip</button>
            {pageTrips.map((trip) => (
                <div className="trip-card" key={String(trip.id)}>
                    <img
                        src={trip.image}
                        alt="Trip image"
                        onClick={() => {
                            setPage("tripDetail");
                            setCurrentTrip(trip.id);
                        }}
                    />
                    <div>
                        <h3>{trip.name}</h3>
                        <p>{trip.destination}</p>
                        <p>start date: {trip.startDate}</p>
                        <p>end date: {trip.endDate}</p>
                    </div>

                    <button
                        className="delete-btn"
                        onClick={() => {
                            deleteTrip(trip.id);
                            setPage("trips");
                        }}>
                        Delete
                    </button>

                    <button
                        className="edit-btn"
                        onClick={() => {
                            setCurrentTrip(trip.id);
                            setPage("updateTripForm");
                        }}>
                        Edit
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Trips;
