import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): Response | void => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            status: "fail",
            errors: err.serializeErrors(),
        });
    }

	console.error(err);
    res.status(500).json({
        status: "failed",
        errors: err.message || "Something wend wrong",
    });
};
