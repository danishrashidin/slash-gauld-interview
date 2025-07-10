import { RequestHandler } from "express";

export const ping: RequestHandler = (_req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
  });
};
