"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = require("express");
const bike_controllers_1 = require("./bike.controllers");
const bikeRouter = (0, express_1.Router)();
// Routing
bikeRouter.post("/bikes", bike_controllers_1.BikeControllers.createBike);
bikeRouter.get("/bikes", bike_controllers_1.BikeControllers.getAllBikes);
bikeRouter.get("/bikes/:bikeId", bike_controllers_1.BikeControllers.getSingleBike);
exports.BikeRoutes = bikeRouter;
