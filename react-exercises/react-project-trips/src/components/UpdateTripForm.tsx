import { useContext, useEffect, useState } from "react";
import { PageContext } from "../context/PageContextProvider";
import { TripsContext } from "../context/TripsContextProvider";
import { customFetch } from "../util/fetch";

const UpdateTripForm = () => {
    const sendData = () => {
        const data = {
            name,
            destination,
            startDate,
            endDate,
            description,
            price,
            image,
            activities,
        };

        const token = localStorage.getItem("token") || "";

        return customFetch(
            `trips/${tripsContext?.currentTrip}`,
            "PUT",
            JSON.stringify(data),
            token
        ).then((response) => {
            console.log(response!.json());
            if (response!.ok) setPage("trips");
        });
    };

    const pageContext = useContext(PageContext);
    const tripsContext = useContext(TripsContext);

    const [name, setName] = useState<string>();
    const [destination, setDest] = useState<string>();
    const [startDate, setSDate] = useState<string>();
    const [endDate, setEDate] = useState<string>();
    const [description, setDesctiption] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [image, setImg] = useState<string>();
    const [activities, setActivities] = useState<string[]>();

    useEffect(() => {
        customFetch(`trips/${tripsContext?.currentTrip}`, 'GET')
            .then((res) => res!.json())
            .then((data) => {
                setName(data.name);
                setDest(data.destination);
                setSDate(data.startDate);
                setEDate(data.endDate);
                setDesctiption(data.description);
                setPrice(data.price);
                setImg(data.image);
                setActivities(data.activities);
            })
            .catch((err) => console.log(err));
    }, []);

    if (!pageContext) return null;
    if (!tripsContext) return null;

    const { setPage } = pageContext;

    return (
        <div>
            <h2>update trip form page</h2>
            <button onClick={() => setPage("home")}>Home</button>
            <div>
                <div className="add-trip-page">
                    <h1 className="page-title">Update Trip</h1>

                    <form className="trip-form">
                        <label>
                            Name:
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                value={name || ""}
                            />
                        </label>

                        <label>
                            Destination:
                            <input
                                onChange={(e) => setDest(e.target.value)}
                                type="text"
                                name="destination"
                                value={destination || ""}
                            />
                        </label>

                        <label>
                            Start Date:
                            <input
                                onChange={(e) => setSDate(e.target.value)}
                                type="date"
                                name="startDate"
                                value={startDate || ""}
                            />
                        </label>

                        <label>
                            End Date:
                            <input
                                onChange={(e) => setEDate(e.target.value)}
                                type="date"
                                name="endDate"
                                value={endDate || ""}
                            />
                        </label>

                        <label>
                            Description:
                            <input
                                onChange={(e) => setDesctiption(e.target.value)}
                                type="text"
                                name="descrption"
                                value={description || ""}
                            />
                        </label>

                        <label>
                            Price:
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                name="price"
                                value={price || ""}
                            />
                        </label>

                        <label>
                            Image URL:
                            <input
                                onChange={(e) => setImg(e.target.value)}
                                type="text"
                                name="imageUrl"
                                value={image || ""}
                            />
                        </label>

                        <label>
                            Activities:
                            <input
                                onChange={(e) =>
                                    setActivities(
                                        (e.target.value as string).split(" ")
                                    )
                                }
                                type="text"
                                name="activities"
                                value={activities?.join(" ") || ""}
                            />
                        </label>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                sendData();
                            }}>
                            Update Trip
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTripForm;
