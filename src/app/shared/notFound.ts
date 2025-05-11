import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: "Api Not Found",
    Error: {
      path: req.originalUrl,
      message: "Your Requested Path is not found...!",
    },
  });
};

export default notFound;
