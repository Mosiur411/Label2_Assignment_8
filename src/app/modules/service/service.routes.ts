import { Router } from "express";
import { ServiceRecordedControllers } from "./service.controllers";

const serviceRecordRouter = Router();

// Routing
serviceRecordRouter.post(
  "/services",
  ServiceRecordedControllers.createServicesRecord
);
serviceRecordRouter.get(
  "/services",
  ServiceRecordedControllers.getAllServicesRecord
);
serviceRecordRouter.get(
  "/services/status",
  ServiceRecordedControllers.getOverdueServicesServicesRecord
);
serviceRecordRouter.get(
  "/services/:serviceId",
  ServiceRecordedControllers.getSingleServicesRecord
);
serviceRecordRouter.put(
  "/services/:serviceId/complete",
  ServiceRecordedControllers.updateSingleServicesRecord
);

export const ServiceRecordedRoutes = serviceRecordRouter;
