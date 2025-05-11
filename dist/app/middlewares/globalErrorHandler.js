"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (error, req, res, next) => {
    // console.log(error);
    res.status(500).json({
        success: false,
        message: (error === null || error === void 0 ? void 0 : error.message) || "Something went Wrong",
        stack: "Optional stack trace shown only in development",
        // error,
    });
};
exports.default = globalErrorHandler;
