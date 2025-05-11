import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { ServiceRecorded } from "./service.services";
import sendResponse from "../../shared/sendResponse";

/**
 * @Method POST
 * @Desc Create Service Recorded
 * @Return Data
 */
const createServicesRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceRecorded.serviceSaveToDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

/**
 * @Method GET
 * @Desc Get All Service Recorded
 * @Return Data
 */
const getAllServicesRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceRecorded.getAllServiceRecord();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

/**
 * @Method GET
 * @Desc Get Single Service Recorded
 * @Params serviceId
 * @Return Data
 */
const getSingleServicesRecord = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ServiceRecorded.getSingleServiceRecord(
      req.params.serviceId
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  }
);

/**
 * @Method PUT
 * @Desc Update Single Service Recorded
 * @Params serviceId
 * @Return Data
 */
const updateSingleServicesRecord = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ServiceRecorded.updateSingleServiceRecord(
      req.params.serviceId,
      req.body
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  }
);

/**
 * @Method GET
 * @Desc Get Overdue Services
 * @Params '
 * @Return Data
 */
const getOverdueServicesServicesRecord = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ServiceRecorded.overdueServiceDataGetFromDB();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: result,
    });
  }
);

export const ServiceRecordedControllers = {
  createServicesRecord,
  getAllServicesRecord,
  getSingleServicesRecord,
  updateSingleServicesRecord,
  getOverdueServicesServicesRecord,
};
