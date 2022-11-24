import { NextFunction, Request, Response } from 'express';
import config from 'config';
import path from 'path';
import { BASEDIR } from 'vars';

export function indexHandler(req: Request, res: Response, next: NextFunction) {
  // res.render('index', { mapsApiKey: config.get<string>('mapsApiKey') });
  res.sendFile(path.join(BASEDIR, 'views', 'index.html'));
}
