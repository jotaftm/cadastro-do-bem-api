import "reflect-metadata";
import express from "express";
import { connectDatabase } from "./database";

connectDatabase();

const app = express();

app.use(express.json());

app.get("", (req, res) => {
  res.json({ msg: "hello woooorld!" });
});

export default app;
