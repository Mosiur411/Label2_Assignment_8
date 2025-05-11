"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeControllers = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const bike_services_1 = require("./bike.services");
/**
 * @Method POST
 * @Desc Create Bike
 * @Return Data
 */
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_services_1.BikeServices.bikeSaveToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Bike added successfully",
        data: result,
    });
}));
/**
 * @Method GET
 * @Desc Get All Bikes
 * @Return Data
 */
const getAllBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_services_1.BikeServices.getAllBikesFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Bikes fetched successfully",
        data: result,
    });
}));
/**
 * @Method GET
 * @Desc Get Single Bike
 * @Return Data
 * @Params bikeId
 */
const getSingleBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_services_1.BikeServices.getSingleBikeFromDB(req.params.bikeId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Bike fetched successfully",
        data: result,
    });
}));
exports.BikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike,
};
