import { type Account, type User } from "next-auth";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    account?: Account;
    user?: User;
  }
}

declare module "next-auth" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface Profile {
    /** OpenID ID Token */
    "cognito:username"?: string;
  }
}
