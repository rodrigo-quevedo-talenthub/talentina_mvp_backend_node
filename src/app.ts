import express from "express";

import router from "./routes";
import cors from "./middlewares/cors"
import { logTime } from "./middlewares/logTime";

const app = express();

app.use(logTime);
app.use(cors);


app.use(express.json());


app.use(router);


export default app;