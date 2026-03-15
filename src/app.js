import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import pagesRouter from "./routes/pages.routes.js";
import {globalErrorHandler} from "./middleware/error.middleware.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/test", (req, res) => {
  res.send("Server works");
});

//a request logger so they can see every request that hits the server. 
app.use((req, res, next) =>{
    console.log(`HIT: ${req.method} ${req.url}`);
    next();
});

app.use("/", pagesRouter);

app.use(globalErrorHandler);

export default app;
