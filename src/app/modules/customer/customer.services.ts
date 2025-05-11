import { Customer } from "@prisma/client";
import prisma from "../../shared/prisma";

// Create Customer
const customerSaveToDB = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

// Get All Customers
const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

// Get Single Customer
const getSingleCustomerFromDB = async (id: string) => {
  // const result = await prisma.customer.findUnique({
  //   where: {
  //     customerId: id,
  //   },
  // });
  // if (!result) {
  //   throw new Error("Customer Not Found!");
  // }
  // console.log(result);
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};

// Update Single Customer
const updateSingleCustomerFromDB = async (
  id: string,
  payload: Partial<Customer>
) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  //  Update Data
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};

// Delete Customer
const deleteCustomerFromDB = async (customerId: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: customerId,
    },
  });

  //  Delete Customer
  const result = await prisma.customer.delete({
    where: {
      customerId,
    },
  });
  return result;
};

export const CustomerServices = {
  customerSaveToDB,
  getAllCustomersFromDB,
  getSingleCustomerFromDB,
  updateSingleCustomerFromDB,
  deleteCustomerFromDB,
};
