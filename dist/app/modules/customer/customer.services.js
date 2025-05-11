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
exports.CustomerServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
// Create Customer
const customerSaveToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.create({
        data: payload,
    });
    return result;
});
// Get All Customers
const getAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
// Get Single Customer
const getSingleCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await prisma.customer.findUnique({
    //   where: {
    //     customerId: id,
    //   },
    // });
    // if (!result) {
    //   throw new Error("Customer Not Found!");
    // }
    // console.log(result);
    const result = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    return result;
});
// Update Single Customer
const updateSingleCustomerFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    //  Update Data
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
});
// Delete Customer
const deleteCustomerFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: customerId,
        },
    });
    //  Delete Customer
    const result = yield prisma_1.default.customer.delete({
        where: {
            customerId,
        },
    });
    return result;
});
exports.CustomerServices = {
    customerSaveToDB,
    getAllCustomersFromDB,
    getSingleCustomerFromDB,
    updateSingleCustomerFromDB,
    deleteCustomerFromDB,
};
