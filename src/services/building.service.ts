import Building, { IBuilding } from '@src/models/building.model';

export const getBuildings = async (
  lat: number,
  lng: number,
  radius: number
): Promise<IBuilding[]> => {
  const buildings = Building.find({
    position: {
      $near: {
        $maxDistance: radius,
        $geometry: { type: 'Point', coordinates: [lng, lat] },
      },
    },
  });

  return buildings;
};
