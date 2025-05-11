import { Bike } from "@prisma/client";
import prisma from "../../shared/prisma";

// Create Bike
const bikeSaveToDB = async (payload: Bike) => {
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

// Get All Bikes
const getAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// Get Single Bike
const getSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const BikeServices = {
  bikeSaveToDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
};
