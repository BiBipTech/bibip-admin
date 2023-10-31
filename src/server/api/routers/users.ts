import axios from "axios";
// import { z } from "zod";
import { env } from "~/env.mjs";
import {
  createTRPCRouter,
  protectedProcedure,
  // publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getWaitingDocuments: protectedProcedure.query(
    async ({ ctx: { session } }) => {
      const usersDocumentsResponse = await axios.get(
        `${env.BIBIP_ADMIN_PANEL_API_ENDPOINT}/users/documents`,
        {
          headers: {
            "x-aws-cognito-token": session.user.token?.account?.access_token,
          },
        },
      );

      const usersDocuments = usersDocumentsResponse.data as {
        users: {
          Attributes: {
            Name:
              | "phone_number"
              | "name"
              | "custom:id_confirmed"
              | "custom:photo_confirmed"
              | "custom:license_confirmed";
            Value: string;
          }[];
          Username: string;
        }[];
      };

      return usersDocuments.users;
    },
  ),
});
