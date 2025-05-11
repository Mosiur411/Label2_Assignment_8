import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(error);
  res.status(500).json({
    success: false,
    message: error?.message || "Something went Wrong",
    stack: "Optional stack trace shown only in development",
    // error,
  });
};

export default globalErrorHandler;
