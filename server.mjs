import express from "express";
import { middleware } from "./middleware.mjs";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 8080;

app.use(express.json());
app.post("/", middleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
