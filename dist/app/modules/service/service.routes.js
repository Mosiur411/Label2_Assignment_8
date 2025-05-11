"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordedRoutes = void 0;
const express_1 = require("express");
const service_controllers_1 = require("./service.controllers");
const serviceRecordRouter = (0, express_1.Router)();
// Routing
serviceRecordRouter.post("/services", service_controllers_1.ServiceRecordedControllers.createServicesRecord);
serviceRecordRouter.get("/services", service_controllers_1.ServiceRecordedControllers.getAllServicesRecord);
serviceRecordRouter.get("/services/status", service_controllers_1.ServiceRecordedControllers.getOverdueServicesServicesRecord);
serviceRecordRouter.get("/services/:serviceId", service_controllers_1.ServiceRecordedControllers.getSingleServicesRecord);
serviceRecordRouter.put("/services/:serviceId/complete", service_controllers_1.ServiceRecordedControllers.updateSingleServicesRecord);
exports.ServiceRecordedRoutes = serviceRecordRouter;
