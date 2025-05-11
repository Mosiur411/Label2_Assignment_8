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
exports.CustomerControllers = void 0;
const customer_services_1 = require("./customer.services");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
/**
 * @Method POST
 * @Desc Create Customer
 * @Return Data
 */
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_services_1.CustomerServices.customerSaveToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Customer created successfully",
        data: result,
    });
}));
/**
 * @Method GET
 * @Desc Get All Customers
 * @Return Data
 */
const getAllCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_services_1.CustomerServices.getAllCustomersFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Customers fetched successfully",
        data: result,
    });
}));
/**
 * @Method GET
 * @Desc Get Single Customer
 * @Return Data
 * @Params customerId
 */
const getSingleCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_services_1.CustomerServices.getSingleCustomerFromDB(req.params.customerId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Customers fetched successfully",
        data: result,
    });
}));
/**
 * @Method PUT
 * @Desc Update Single Customer
 * @Return Data
 * @Params customerId
 */
const updateSingleCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_services_1.CustomerServices.updateSingleCustomerFromDB(req.params.customerId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Customer updated successfully",
        data: result,
    });
}));
/**
 * @Method DELETE
 * @Desc Delete Single Customer
 * @Return Data
 * @Params customerId
 */
const deleteSingleCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_services_1.CustomerServices.deleteCustomerFromDB(req.params.customerId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Customer deleted successfully",
        data: null,
    });
}));
exports.CustomerControllers = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateSingleCustomer,
    deleteSingleCustomer,
};
