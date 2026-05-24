import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// .env ෆයිල් එකේ තියෙන දේවල් කියවන්න මේක අනිවාර්යයි
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Frontend එකෙන් එවන JSON ඩේටා කියවන්න

// MongoDB Connection එක සෙට් කිරීම
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() =>
    console.log("MongoDB database connection established successfully! 🔥"),
  )
  .catch((err) => console.error("MongoDB connection error: ❌", err));

// Basic Route (නිකන් ටෙස්ට් කරලා බලන්න)
app.get("/", (req, res) => {
  res.send("Agile Task Manager API is running with MongoDB...");
});

// Server එක Start කිරීම
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
