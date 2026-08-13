export function resolvePort(requestedPort?: number): number {
  return requestedPort ?? 3000;
}
