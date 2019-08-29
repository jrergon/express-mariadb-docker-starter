import * as dotenv from "dotenv";

class Config {
    prepareEnv():void {
        dotenv.config();
        let path;
        switch (process.env.NODE_ENV) {
            case "test":
                path = ".env.test";
                break;
            case "production":
                path = ".env.production";
                break;
            default:
                path = ".env.development";
                break;
        }

        dotenv.config({
            path: path
        });
    }
}


export default Config;