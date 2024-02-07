// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Trip, Car, Attribute, Time, Location } = initSchema(schema);

export {
  User,
  Trip,
  Car,
  Attribute,
  Time,
  Location
};