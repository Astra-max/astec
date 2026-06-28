import express from "express";
import cors from "cors";
import env from "dotenv";
import cookieparser from "cookie-parser";
import router from "./routes/apiRoutes.js";
import handleLogs from "./logger/logs.js";

env.config()

const app = express();
app.use(express.json());
app.use(cookieparser())
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],  
    credentials: true,
  })
);

 
app.use(handleLogs)

app.use("/", router);

const Port = 5500

app.listen(process.env.PORT || Port, () => {
        console.log(`Server listening at ${process.env.Port || Port}`) 
});
