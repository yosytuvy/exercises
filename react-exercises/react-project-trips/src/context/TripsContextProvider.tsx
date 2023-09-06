import React, { createContext, useState } from "react";

type Trips = Record<string, string>[];

interface TripsContextType {
    currentTrip: string;
    trips:Trips;
    setTrips: React.Dispatch<React.SetStateAction<Trips>>;
    setCurrentTrip:React.Dispatch<React.SetStateAction<string>>;
}

interface TripsContextProviderProps {
    children: React.ReactNode;
}

export const TripsContext = createContext<TripsContextType | null>(null);
const TripsContextProvider: React.FC<TripsContextProviderProps> = (props) => {
    const [trips, setTrips] = useState<Trips>([{}]);
    const [currentTrip, setCurrentTrip] = useState<string>('');
    return (
        <TripsContext.Provider value={{ trips, setTrips, currentTrip, setCurrentTrip}}>
            {props.children}
        </TripsContext.Provider>
    );
};
export default TripsContextProvider;
