import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult } from "express-validator";
import createHttpError from "http-errors";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return next(
      createHttpError(400, {
        errors: errors.array(),
        message: errors.array()[0].msg,
      })
    );
  };
};
