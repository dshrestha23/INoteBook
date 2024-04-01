import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongo from "./db/connectToMongo.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Available Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`iNotebook backend listening at http://localhost:${PORT}`);
});
