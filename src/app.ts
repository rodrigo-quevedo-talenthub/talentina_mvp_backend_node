import express from "express";

import router from "./routes";
import cors from "./middlewares/cors"
import { logTime } from "./middlewares/logTime";

const app = express();

app.use(cors);
app.use(logTime);

app.use(router);


export default app;