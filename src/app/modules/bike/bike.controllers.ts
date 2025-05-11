import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { BikeServices } from "./bike.services";

/**
 * @Method POST
 * @Desc Create Bike
 * @Return Data
 */
const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeServices.bikeSaveToDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

/**
 * @Method GET
 * @Desc Get All Bikes
 * @Return Data
 */
const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeServices.getAllBikesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

/**
 * @Method GET
 * @Desc Get Single Bike
 * @Return Data
 * @Params bikeId
 */
const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeServices.getSingleBikeFromDB(req.params.bikeId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const BikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
};
