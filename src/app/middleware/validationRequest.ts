import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateRequest = (validSchema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try{
      await validSchema.parseAsync({
        body: req.body,
        //cookies: req.cookies
      });
      next();
    }catch(err){
      next(err)
    }
  };
};