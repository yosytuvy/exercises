import { useContext, useEffect, useState } from "react";
import { PageContext } from "../context/PageContextProvider";
import { TripsContext } from "../context/TripsContextProvider";
import { customFetch } from "../util/fetch";

const TripDetail = () => {
    const pageContext = useContext(PageContext);
    const tripsContext = useContext(TripsContext);

    const [cTrip, setCTrip] = useState<Record<string, string | string[]>>({});
    const [activities, setActivities] = useState<string[]>();

    useEffect(() => {
        customFetch(`trips/${tripsContext?.currentTrip}`, "GET")
            .then((res) => res!.json())
            .then((data) => {
                setCTrip(data);
                setActivities(data.activities);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    if (!pageContext) return null;
    const { setPage } = pageContext;

    return (
        <div>
            <h2>trip detail page</h2>
            <button onClick={() => setPage("trips")}>Trips</button>

            <div className="trip-details">
                <div className="details-header">
                    <h1>{cTrip.name}</h1>
                    <p>{cTrip.destination}</p>
                </div>

                <img className="trip-image" src={cTrip.image as string} />

                <div className="trip-info">
                    <div>
                        <h3>Description</h3>
                        <p>{cTrip.description}</p>
                    </div>
                    <div>
                        <h3>Price</h3>
                        <p>{cTrip.price}</p>
                    </div>
                    <div>
                        <h3>Activities</h3>
                        <div className="activities">
                            {activities?.map((activitie, index) => {
                                return <p key={index}>{activitie}</p>;
                            })}
                        </div>
                    </div>
                </div>

                <div className="trip-info">
                    <div>
                        <h3>Start Date</h3>
                        <p>{cTrip.startDate}</p>
                    </div>
                    <div>
                        <h3>End Date</h3>
                        <p>{cTrip.endDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetail;
