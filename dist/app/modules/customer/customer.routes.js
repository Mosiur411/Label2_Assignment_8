"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = require("express");
const customer_controllers_1 = require("./customer.controllers");
const customerRouter = (0, express_1.Router)();
// Routing
customerRouter.post("/customers", customer_controllers_1.CustomerControllers.createCustomer);
customerRouter.get("/customers", customer_controllers_1.CustomerControllers.getAllCustomers);
customerRouter.get("/customers/:customerId", customer_controllers_1.CustomerControllers.getSingleCustomer);
customerRouter.put("/customers/:customerId", customer_controllers_1.CustomerControllers.updateSingleCustomer);
customerRouter.delete("/customers/:customerId", customer_controllers_1.CustomerControllers.deleteSingleCustomer);
exports.CustomerRoutes = customerRouter;
