import { Request, Response, NextFunction} from "express";

export async function getVersion(req: Request, res: Response) {
    res.json({
        version: process.env.APP_VERSION
    });
};