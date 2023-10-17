export type User = {
  Attributes: UserAttribute[];
  Enabled: boolean;
  UserStatus: string;
  Username: string;
};

export type UserAttribute = {
  Name: string;
  Value: string;
};
