import express from "express";
import { middleware } from "./middleware.mjs";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.post("/makeRequest", middleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
