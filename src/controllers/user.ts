import {Request, Response, NextFunction} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

export async function getUsers(req: Request, res: Response) {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();

    res.send(users);
};