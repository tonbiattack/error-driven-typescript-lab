export interface Profile {
  readonly name: string;
  readonly age: number;
}

export function parseProfile(input: unknown): Profile {
  return input as Profile;
}
