import { gql } from "@apollo/client";
import { log } from "console";
// import { z } from "zod";
import { type Car } from "~/API";
import * as queries from "~/graphql/queries";
import {
  createTRPCRouter,
  protectedProcedure,
  // publicProcedure,
} from "~/server/api/trpc";

export const vehicleRouter = createTRPCRouter({
  listBiBipCars: protectedProcedure.query(async ({ ctx: { apolloClient } }) => {
    const res = await apolloClient?.query<{
      listCars: { items: Car[] };
    }>({
      query: gql(queries.listCars),
    });
    return res?.data.listCars.items;
  }),
});
