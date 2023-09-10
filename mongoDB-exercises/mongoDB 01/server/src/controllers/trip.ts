import { Request, Response } from "express";
import {
    getAllTrips,
    getTripById,
    createTrip,
    updateTrip,
    deleteTrip,
} from "../utils/trips";
import { Trip } from "../models/trip";

// Get all trips
export const getAllTripsController = (req: Request, res: Response) => {
    getAllTrips()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

// Get a trip by ID
export const getTripByIdController = (req: Request, res: Response) => {
    const tripId: string = req.params.id;

    getTripById(tripId)
        .then((trip) => {
            res.json(trip);
        })
        .catch(() => {
            return res.status(404).json({ error: "Trip not found" });
        });
};

// Create a new trip
export const createTripController = (req: Request, res: Response) => {
    const newTrip: Trip = req.body; // Assumes request body contains trip data
    console.log(newTrip);

    createTrip(newTrip)
        .then((createdTrip) => {
            console.log(createdTrip);
            res.status(201).json(createdTrip);
        })
        .catch((err) => console.log(err));
};

// Update a trip by ID
export const updateTripController = (req: Request, res: Response) => {
    const tripId: string = req.params.id;
    const updatedTripData: Trip = req.body; // Assumes request body contains updated trip data
    updatedTripData.id = tripId;

    updateTrip(updatedTripData)
        .then((updatedTrip) => {
            res.json(updatedTrip);
        })
        .catch(() => {
            return res.status(404).json({ error: "Trip not found" });
        });
};

// Delete a trip by ID
export const deleteTripController = (req: Request, res: Response) => {
    const tripId: string = req.params.id;
    deleteTrip(tripId)
        .then((deletedTrip) => {
            res.json(deletedTrip);
        })
        .catch(() => {
            return res.status(404).json({ error: "Trip not found" });
        });
};
