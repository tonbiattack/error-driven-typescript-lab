export interface Profile {
  readonly name: string;
  readonly age: number;
}

export function parseProfile(input: unknown): Profile {
  if (!isProfile(input)) {
    throw new TypeError("profile must contain a string name and a number age");
  }

  return input;
}

function isProfile(input: unknown): input is Profile {
  if (typeof input !== "object" || input === null) {
    return false;
  }

  const candidate = input as { name?: unknown; age?: unknown };
  return typeof candidate.name === "string" && typeof candidate.age === "number";
}
