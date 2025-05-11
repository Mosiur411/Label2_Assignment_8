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
exports.ServiceRecorded = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../shared/prisma"));
// Create Service
const serviceSaveToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.create({
        data: payload,
    });
    return result;
});
// Get All Service Record
const getAllServiceRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
// Get Single Service Record
const getSingleServiceRecord = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    return result;
});
// Update Single Service Record
const updateSingleServiceRecord = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceCompletionDate = (payload === null || payload === void 0 ? void 0 : payload.completionDate) || new Date();
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            status: client_1.ServiceRecordStatus.done,
            completionDate: serviceCompletionDate,
        },
    });
    return result;
});
//  Overdue Services
const overdueServiceDataGetFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "inProgress"],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return result;
});
exports.ServiceRecorded = {
    serviceSaveToDB,
    getAllServiceRecord,
    getSingleServiceRecord,
    updateSingleServiceRecord,
    overdueServiceDataGetFromDB,
};
