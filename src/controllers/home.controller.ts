import { NextFunction, Request, Response } from 'express';

export function indexHandler(req: Request, res: Response, next: NextFunction) {
  res.render('index', {});
}
