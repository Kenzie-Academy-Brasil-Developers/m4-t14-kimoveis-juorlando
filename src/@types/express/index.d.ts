import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      validatedAdmin: {
        id: number;
        admin: boolean;
      };
    }
  }
}
