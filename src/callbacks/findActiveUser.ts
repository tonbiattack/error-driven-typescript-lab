export interface User {
  readonly id: string;
  readonly active: boolean;
}

export function findActiveUser(users: readonly User[], id: string): User | undefined {
  return users.find((user) => {
    user.id === id && user.active;
  });
}
