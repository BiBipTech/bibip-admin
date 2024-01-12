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
      console.log(usersDocumentsResponse.data);

      const usersDocuments = usersDocumentsResponse.data as {
        paginationKey: string;
        users: {
          idConfirmed: {
            S: "true" | "false" | "waiting";
          };
          photoConfirmed: {
            S: "true" | "false" | "waiting";
          };
          licenseConfirmed: {
            S: "true" | "false" | "waiting";
          };
          id: {
            S: string;
          };
          name: {
            S: string;
          };
          username: {
            S: string;
          };
          citizenId: {
            S: string;
          };
        }[];
      };

      return usersDocuments;
    },
  ),
});
