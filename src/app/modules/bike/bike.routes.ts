import { Router } from "express";
import { BikeControllers } from "./bike.controllers";

const bikeRouter = Router();

// Routing
bikeRouter.post("/bikes", BikeControllers.createBike);
bikeRouter.get("/bikes", BikeControllers.getAllBikes);
bikeRouter.get("/bikes/:bikeId", BikeControllers.getSingleBike);

export const BikeRoutes = bikeRouter;
