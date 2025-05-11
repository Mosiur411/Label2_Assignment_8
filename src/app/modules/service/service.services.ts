import { ServiceRecord, ServiceRecordStatus } from "@prisma/client";
import prisma from "../../shared/prisma";

// Create Service
const serviceSaveToDB = async (payload: ServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: payload,
  });
  return result;
};

// Get All Service Record
const getAllServiceRecord = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

// Get Single Service Record
const getSingleServiceRecord = async (id: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  return result;
};

// Update Single Service Record
const updateSingleServiceRecord = async (
  id: string,
  payload: Partial<ServiceRecord>
) => {
  const serviceCompletionDate = payload?.completionDate || new Date();
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      status: ServiceRecordStatus.done,
      completionDate: serviceCompletionDate,
    },
  });
  return result;
};

//  Overdue Services
const overdueServiceDataGetFromDB = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const result = await prisma.serviceRecord.findMany({
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
};
export const ServiceRecorded = {
  serviceSaveToDB,
  getAllServiceRecord,
  getSingleServiceRecord,
  updateSingleServiceRecord,
  overdueServiceDataGetFromDB,
};
