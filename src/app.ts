import { ServiceRecordedRoutes } from "./app/modules/service/service.routes";
import express, { Application, Request, Response } from "express";
import { CustomerRoutes } from "./app/modules/customer/customer.routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/shared/notFound";
import { BikeRoutes } from "./app/modules/bike/bike.routes";

const app: Application = express();

app.use(express.json());

//  Test Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "BikeNest Api Successfully Running Now...!",
  });
});

//  Routes
app.use("/api", CustomerRoutes);
app.use("/api", BikeRoutes);
app.use("/api", ServiceRecordedRoutes);
// Middlewares
app.use(globalErrorHandler);
app.use(notFound);
export default app;
