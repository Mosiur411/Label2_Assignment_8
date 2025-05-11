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
exports.ServiceRecordedControllers = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const service_services_1 = require("./service.services");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
/**
 * @Method POST
 * @Desc Create Service Recorded
 * @Return Data
 */
const createServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_services_1.ServiceRecorded.serviceSaveToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
}));
/**
 * @Method GET
 * @Desc Get All Service Recorded
 * @Return Data
 */
const getAllServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_services_1.ServiceRecorded.getAllServiceRecord();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
/**
 * @Method GET
 * @Desc Get Single Service Recorded
 * @Params serviceId
 * @Return Data
 */
const getSingleServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_services_1.ServiceRecorded.getSingleServiceRecord(req.params.serviceId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
}));
/**
 * @Method PUT
 * @Desc Update Single Service Recorded
 * @Params serviceId
 * @Return Data
 */
const updateSingleServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_services_1.ServiceRecorded.updateSingleServiceRecord(req.params.serviceId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
}));
/**
 * @Method GET
 * @Desc Get Overdue Services
 * @Params '
 * @Return Data
 */
const getOverdueServicesServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_services_1.ServiceRecorded.overdueServiceDataGetFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
}));
exports.ServiceRecordedControllers = {
    createServicesRecord,
    getAllServicesRecord,
    getSingleServicesRecord,
    updateSingleServicesRecord,
    getOverdueServicesServicesRecord,
};
