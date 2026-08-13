export interface Coordinates {
  readonly latitude: number;
  readonly longitude: number;
}

export function sameCoordinates(left: Coordinates, right: Coordinates): boolean {
  return left === right;
}
