"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(400).json({
        success: false,
        message: "Api Not Found",
        Error: {
            path: req.originalUrl,
            message: "Your Requested Path is not found...!",
        },
    });
};
exports.default = notFound;
