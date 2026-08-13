export interface Coordinates {
  readonly latitude: number;
  readonly longitude: number;
}

export function sameCoordinates(left: Coordinates, right: Coordinates): boolean {
  return left.latitude === right.latitude && left.longitude === right.longitude;
}
