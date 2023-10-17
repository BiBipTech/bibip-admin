import { gql } from "@apollo/client";
import { log } from "console";
import { z } from "zod";
import { Car, ModelCarConnection } from "~/API";
import * as queries from "~/graphql/queries";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure.query(({ ctx: { apolloClient } }) => {
    // const res = await apolloClient?.query<{
    //   listCars: { items: ModelCarConnection[] };
    // }>({
    //   query: gql(queries.listCars),
    // });
    // log(res?.data.listCars.items);

    return "you can now see this secret message!";
  }),
});
