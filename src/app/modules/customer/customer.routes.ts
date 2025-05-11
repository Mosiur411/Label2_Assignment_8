import { Router } from "express";
import { CustomerControllers } from "./customer.controllers";

const customerRouter = Router();

// Routing
customerRouter.post("/customers", CustomerControllers.createCustomer);
customerRouter.get("/customers", CustomerControllers.getAllCustomers);
customerRouter.get(
  "/customers/:customerId",
  CustomerControllers.getSingleCustomer
);
customerRouter.put(
  "/customers/:customerId",
  CustomerControllers.updateSingleCustomer
);

customerRouter.delete(
  "/customers/:customerId",
  CustomerControllers.deleteSingleCustomer
);

export const CustomerRoutes = customerRouter;
