import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser"; 
import userRoute from "./route/userRoute.js";
import Router from "./route/route.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/home", Router);
app.use("/user", userRoute);
const PORT = 8000;
app.listen(PORT, () => console.log("Server is running on port 8000"));

Connection();
