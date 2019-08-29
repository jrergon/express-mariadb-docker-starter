import express = require("express");
import * as appController from "../controllers/app";
import * as userController from "../controllers/user";

let router: express.Router = express.Router();

router.get('/version', appController.getVersion);
router.get('/user', userController.getUsers);

export default router;