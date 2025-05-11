"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_routes_1 = require("./app/modules/service/service.routes");
const express_1 = __importDefault(require("express"));
const customer_routes_1 = require("./app/modules/customer/customer.routes");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/shared/notFound"));
const bike_routes_1 = require("./app/modules/bike/bike.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//  Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "BikeNest Api Successfully Running Now...!",
    });
});
//  Routes
app.use("/api", customer_routes_1.CustomerRoutes);
app.use("/api", bike_routes_1.BikeRoutes);
app.use("/api", service_routes_1.ServiceRecordedRoutes);
// Middlewares
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
