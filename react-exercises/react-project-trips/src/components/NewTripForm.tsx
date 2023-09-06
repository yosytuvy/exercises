import { useContext, useState } from "react";
import { PageContext } from "../context/PageContextProvider";
import { customFetch } from "../util/fetch";

const NewTripForm = () => {
    const [name, setName] = useState<string>();
    const [destination, setDest] = useState<string>();
    const [startDate, setSDate] = useState<string>();
    const [endDate, setEDate] = useState<string>();
    const [image, setImg] = useState<string>();

    const pageContext = useContext(PageContext);

    if (!pageContext) return null;
    const { setPage } = pageContext;

    const sendData = () => {
        const data = { name, destination, startDate, endDate, image };
        const token = localStorage.getItem("token") || "";

        return customFetch("trips", "POST", JSON.stringify(data), token).then(
            (response) => {
                console.log(response!.json);
                if (response!.ok) setPage("trips");
            }
        );
    };

    return (
        <div className="newTripForm-page">
            <h2>new trip form page</h2>
            <button onClick={() => setPage("home")}>Home</button>

            <div className="add-trip-page">
                <h1 className="page-title">Add New Trip</h1>

                <form className="trip-form">
                    <label>
                        Name:
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                        />
                    </label>

                    <label>
                        Destination:
                        <input
                            onChange={(e) => setDest(e.target.value)}
                            type="text"
                            name="destination"
                        />
                    </label>

                    <label>
                        Start Date:
                        <input
                            onChange={(e) => setSDate(e.target.value)}
                            type="date"
                            name="startDate"
                        />
                    </label>

                    <label>
                        End Date:
                        <input
                            onChange={(e) => setEDate(e.target.value)}
                            type="date"
                            name="endDate"
                        />
                    </label>

                    <label>
                        Image URL:
                        <input
                            onChange={(e) => setImg(e.target.value)}
                            type="text"
                            name="imageUrl"
                        />
                    </label>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            sendData();
                        }}>
                        Add Trip
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTripForm;
