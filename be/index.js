import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose'

const app = express();

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to Database");

    app.get("/", (req, res) => {
      return res.status(234).send("welcome to mern stack");
    });

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
