import { getBuildings } from '@src/services/building.service';
import { Request, Response, NextFunction } from 'express';

export const getWithinRadiusHandler = async (req: Request, res: Response, next: NextFunction) => {
  const lat = Number(req.query.lat ?? -34.16644556429744);
  const lng = Number(req.query.lng ?? 24.828156701270824);
  const radius = Number(req.query.radius ?? 10000); // meters

  const buildings = await getBuildings(lat, lng, radius);
  res.json(buildings);
};
