import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import router from "./routes";
import Config from "./utils/config";

createConnection().then(async connection => {
    const app: express.Application = express();
    const config: Config = new Config();

    config.prepareEnv();
    app.use("/", router);
    app.use(bodyParser.json());

    app.listen(process.env.PORT, function () {
        console.log('app listening on port ' + process.env.PORT);
    });
}).catch(error => console.log("Database connection error: ", error));