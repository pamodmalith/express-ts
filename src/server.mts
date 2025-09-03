import express from "express";
import rootRouter from "./router/index.mjs";

const server = express();

// MIDDLEWARE
server.use(express.json());

// ROUTERS
server.use("/api/v1", rootRouter);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
