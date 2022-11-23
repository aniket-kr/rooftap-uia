import { NextFunction, Request, Response } from 'express';
import config from 'config';

export function indexHandler(req: Request, res: Response, next: NextFunction) {
  res.render('index', { mapsApiKey: config.get<string>('mapsApiKey') });
}
