import express from "express";
import cors from "cors";
import config from "./db/config";

import eventsRoutes from "./routes/events";
import usersRoutes from "./routes/users";
import partnersRoutes from "./routes/partners";

const app = express();

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/events", eventsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/partners", partnersRoutes);

app.listen(config.port, () => {
    console.log(`Server is live on ${config.hostUrl}`);
});