import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./api/user/routes.js"
export const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());


app.use("/user",userRouter)

dotenv.config({
  path:"./configurations/config.env"
});


app.get("/", (req, res, next) => {
  res.send("server is working");
});
