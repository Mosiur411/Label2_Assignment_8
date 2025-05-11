## :bike: BikeNest - Bike Servicing Management API Summary

The BikeNest Servicing Management System is a RESTful backend API designed to help bike servicing centers efficiently manage their operations. It enables easy handling of customer data, bike information, and service records through structured and scalable endpoints.

This system supports full CRUD operations for customers, bikes, and services, along with special endpoints to assign new service jobs and mark services as completed. For example, a specific endpoint allows setting a service's status to "done" and optionally includes a custom completionDate.

The backend is built with Node.js, Express.js, and Prisma ORM, and uses PostgreSQL as the database. The codebase follows a modular and scalable architecture, making it easy to integrate features like authentication, invoicing, and notifications in the future.

## [ Live backend Link](https://bike-nest.vercel.app/)

Click here for the Live Backend Link: [https://bike-nest.vercel.app/](https://bike-nest.vercel.app/)

## 🚀 Project Features - BikeNest

1. **Customer Management:** Customer Can Add, View, Update Customer Data.
2. **Bike Management:** Each customer can create and Get their bikes.
3. **Service Record Management:** User Can add service, Track service history for each bike and update service records status.

## 🧑‍💻 Tech Stack

- Node JS
- Express JS
- Typescript
- PostgreSQL
- Prisma ORM

## 🛠️ Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install the required dependencies**

```bash
yarn install
```

3. **Create a `.env` file in the root directory and configure the following environment variables**

```bash

 DATABASE_URL=<your_database_url>

```

4. **Start the Server**

```bash
 yarn dev
```

5. **The Live Site will be available at**

```bash
http://localhost:5000
```
