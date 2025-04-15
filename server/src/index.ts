import express, { NextFunction, Request, Response } from "express";
import cors from "cors"; 
import apiRoutes from "./routes/api.routes";
import { PORT, CLIENT_URL } from "./config/index";
import morgan from "morgan";

const app = express();

app.use(cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.use("/api", apiRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

