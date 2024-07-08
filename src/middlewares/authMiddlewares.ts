import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../errors/notAuthorizedError";

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.session?.jwt) {
        throw new NotAuthorizedError();
    }

    const { id, email } = jwt.verify(req.session.jwt, process.env.JWT_SECRET!) as UserPayload;

	// TODO find a way to get if the user exists or not in a shared middleware
    // const curUser = await User.findById(id);
    // if (!curUser) {
    //     throw new NotAuthorizedError("The user belonging to this token does no longer exists.");
    // }

    // TODO maybe add check if the user changed the password after the jwt was issued.

    req.user = { id, email };
    next();
};
