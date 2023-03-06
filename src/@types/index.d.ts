import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      validatedAdmin: {
        id: number;
        name: string;
        email: string;
        password: string;
        admin: boolean;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
      };
    }
  }
}
