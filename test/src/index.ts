import express, { type Request, type Response} from "express";
import cors from "cors";
import { CLIENT_URL, PORT } from "./config";
import apiRouter from "./routes/api.route"

const app = express();

app.use(express.json());
app.use(cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH"]
}))

app.get("/", (req: Request, res: Response) => {
    res.json({ success: true, message: "Working!!!!!!!!!!!!!!1"});
})

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
})