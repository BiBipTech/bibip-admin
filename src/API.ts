/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  Username?: string | null,
  Attributes?: Array< AttributeInput | null > | null,
  _version?: number | null,
};

export type AttributeInput = {
  Name?: string | null,
  Value?: string | null,
};

export type ModelUserConditionInput = {
  Username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  Username?: string | null,
  Attributes?:  Array<Attribute | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Attribute = {
  __typename: "Attribute",
  Name?: string | null,
  Value?: string | null,
};

export type UpdateUserInput = {
  id: string,
  Username?: string | null,
  Attributes?: Array< AttributeInput | null > | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateTripInput = {
  id?: string | null,
  roadTraveled?: number | null,
  time?: TimeInput | null,
  user?: string | null,
  carID: string,
  duration?: number | null,
  fee?: number | null,
  paidViaCreditCard?: number | null,
  paidViaWallet?: number | null,
  rating?: number | null,
  reservationFee?: number | null,
  _version?: number | null,
};

export type TimeInput = {
  start?: number | null,
  end?: number | null,
};

export type ModelTripConditionInput = {
  roadTraveled?: ModelFloatInput | null,
  user?: ModelStringInput | null,
  carID?: ModelIDInput | null,
  duration?: ModelIntInput | null,
  fee?: ModelFloatInput | null,
  paidViaCreditCard?: ModelFloatInput | null,
  paidViaWallet?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  reservationFee?: ModelFloatInput | null,
  and?: Array< ModelTripConditionInput | null > | null,
  or?: Array< ModelTripConditionInput | null > | null,
  not?: ModelTripConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Trip = {
  __typename: "Trip",
  id: string,
  roadTraveled?: number | null,
  time?: Time | null,
  user?: string | null,
  carID: string,
  duration?: number | null,
  fee?: number | null,
  paidViaCreditCard?: number | null,
  paidViaWallet?: number | null,
  rating?: number | null,
  reservationFee?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Time = {
  __typename: "Time",
  start?: number | null,
  end?: number | null,
};

export type UpdateTripInput = {
  id: string,
  roadTraveled?: number | null,
  time?: TimeInput | null,
  user?: string | null,
  carID?: string | null,
  duration?: number | null,
  fee?: number | null,
  paidViaCreditCard?: number | null,
  paidViaWallet?: number | null,
  rating?: number | null,
  reservationFee?: number | null,
  _version?: number | null,
};

export type DeleteTripInput = {
  id: string,
  _version?: number | null,
};

export type CreateCarInput = {
  id?: string | null,
  name?: string | null,
  location?: LocationInput | null,
  inUse?: boolean | null,
  battery?: number | null,
  connected?: boolean | null,
  _version?: number | null,
};

export type LocationInput = {
  lat: number,
  lng: number,
};

export type ModelCarConditionInput = {
  name?: ModelStringInput | null,
  inUse?: ModelBooleanInput | null,
  battery?: ModelFloatInput | null,
  connected?: ModelBooleanInput | null,
  and?: Array< ModelCarConditionInput | null > | null,
  or?: Array< ModelCarConditionInput | null > | null,
  not?: ModelCarConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Car = {
  __typename: "Car",
  id: string,
  name?: string | null,
  location?: Location | null,
  inUse?: boolean | null,
  battery?: number | null,
  Trips?: ModelTripConnection | null,
  connected?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Location = {
  __typename: "Location",
  lat: number,
  lng: number,
};

export type ModelTripConnection = {
  __typename: "ModelTripConnection",
  items:  Array<Trip | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCarInput = {
  id: string,
  name?: string | null,
  location?: LocationInput | null,
  inUse?: boolean | null,
  battery?: number | null,
  connected?: boolean | null,
  _version?: number | null,
};

export type DeleteCarInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  Username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTripFilterInput = {
  id?: ModelIDInput | null,
  roadTraveled?: ModelFloatInput | null,
  user?: ModelStringInput | null,
  carID?: ModelIDInput | null,
  duration?: ModelIntInput | null,
  fee?: ModelFloatInput | null,
  paidViaCreditCard?: ModelFloatInput | null,
  paidViaWallet?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  reservationFee?: ModelFloatInput | null,
  and?: Array< ModelTripFilterInput | null > | null,
  or?: Array< ModelTripFilterInput | null > | null,
  not?: ModelTripFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  inUse?: ModelBooleanInput | null,
  battery?: ModelFloatInput | null,
  connected?: ModelBooleanInput | null,
  and?: Array< ModelCarFilterInput | null > | null,
  or?: Array< ModelCarFilterInput | null > | null,
  not?: ModelCarFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCarConnection = {
  __typename: "ModelCarConnection",
  items:  Array<Car | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTripFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roadTraveled?: ModelSubscriptionFloatInput | null,
  user?: ModelSubscriptionStringInput | null,
  carID?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionIntInput | null,
  fee?: ModelSubscriptionFloatInput | null,
  paidViaCreditCard?: ModelSubscriptionFloatInput | null,
  paidViaWallet?: ModelSubscriptionFloatInput | null,
  rating?: ModelSubscriptionIntInput | null,
  reservationFee?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTripFilterInput | null > | null,
  or?: Array< ModelSubscriptionTripFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  inUse?: ModelSubscriptionBooleanInput | null,
  battery?: ModelSubscriptionFloatInput | null,
  connected?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCarFilterInput | null > | null,
  or?: Array< ModelSubscriptionCarFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    Username?: string | null,
    Attributes?:  Array< {
      __typename: "Attribute",
      Name?: string | null,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    Username?: string | null,
    Attributes?:  Array< {
      __typename: "Attribute",
      Name?: string | null,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    Username?: string | null,
    Attributes?:  Array< {
      __typename: "Attribute",
      Name?: string | null,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTripMutationVariables = {
  input: CreateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type CreateTripMutation = {
  createTrip?:  {
    __typename: "Trip",
    id: string,
    roadTraveled?: number | null,
    time?:  {
      __typename: "Time",
      start?: number | null,
      end?: number | null,
    } | null,
    user?: string | null,
    carID: string,
    duration?: number | null,
    fee?: number | null,
    paidViaCreditCard?: number | null,
    paidViaWallet?: number | null,
    rating?: number | null,
    reservationFee?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTripMutationVariables = {
  input: UpdateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type UpdateTripMutation = {
  updateTrip?:  {
    __typename: "Trip",
    id: string,
    roadTraveled?: number | null,
    time?:  {
      __typename: "Time",
      start?: number | null,
      end?: number | null,
    } | null,
    user?: string | null,
    carID: string,
    duration?: number | null,
    fee?: number | null,
    paidViaCreditCard?: number | null,
    paidViaWallet?: number | null,
    rating?: number | null,
    reservationFee?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTripMutationVariables = {
  input: DeleteTripInput,
  condition?: ModelTripConditionInput | null,
};

export type DeleteTripMutation = {
  deleteTrip?:  {
    __typename: "Trip",
    id: string,
    roadTraveled?: number | null,
    time?:  {
      __typename: "Time",
      start?: number | null,
      end?: number | null,
    } | null,
    user?: string | null,
    carID: string,
    duration?: number | null,
    fee?: number | null,
    paidViaCreditCard?: number | null,
    paidViaWallet?: number | null,
    rating?: number | null,
    reservationFee?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCarMutationVariables = {
  input: CreateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type CreateCarMutation = {
  createCar?:  {
    __typename: "Car",
    id: string,
    name?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    inUse?: boolean | null,
    battery?: number | null,
    Trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        roadTraveled?: number | null,
        time?:  {
          __typename: "Time",
          start?: number | null,
          end?: number | null,
        } | null,
        user?: string | null,
        carID: string,
        duration?: number | null,
        fee?: number | null,
        paidViaCreditCard?: number | null,
        paidViaWallet?: number | null,
        rating?: number | null,
        reservationFee?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    connected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCarMutationVariables = {
  input: UpdateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type UpdateCarMutation = {
  updateCar?:  {
    __typename: "Car",
    id: string,
    name?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    inUse?: boolean | null,
    battery?: number | null,
    Trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        roadTraveled?: number | null,
        time?:  {
          __typename: "Time",
          start?: number | null,
          end?: number | null,
        } | null,
        user?: string | null,
        carID: string,
        duration?: number | null,
        fee?: number | null,
        paidViaCreditCard?: number | null,
        paidViaWallet?: number | null,
        rating?: number | null,
        reservationFee?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    connected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCarMutationVariables = {
  input: DeleteCarInput,
  condition?: ModelCarConditionInput | null,
};

export type DeleteCarMutation = {
  deleteCar?:  {
    __typename: "Car",
    id: string,
    name?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    inUse?: boolean | null,
    battery?: number | null,
    Trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        roadTraveled?: number | null,
        time?:  {
          __typename: "Time",
          start?: number | null,
          end?: number | null,
        } | null,
        user?: string | null,
        carID: string,
        duration?: number | null,
        fee?: number | null,
        paidViaCreditCard?: number | null,
        paidViaWallet?: number | null,
        rating?: number | null,
        reservationFee?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    connected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    Username?: string | null,
    Attributes?:  Array< {
      __typename: "Attribute",
      Name?: string | null,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      Username?: string | null,
      Attributes?:  Array< {
        __typename: "Attribute",
        Name?: string | null,
        Value?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      Username?: string | null,
      Attributes?:  Array< {
        __typename: "Attribute",
        Name?: string | null,
        Value?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTripQueryVariables = {
  id: string,
};

export type GetTripQuery = {
  getTrip?:  {
    __typename: "Trip",
    id: string,
    roadTraveled?: number | null,
    time?:  {
      __typename: "Time",
      start?: number | null,
      end?: number | null,
    } | null,
    user?: string | null,
    carID: string,
    duration?: number | null,
    fee?: number | null,
    paidViaCreditCard?: number | null,
    paidViaWallet?: number | null,
    rating?: number | null,
    reservationFee?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTripsQueryVariables = {
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTripsQuery = {
  listTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      id: string,
      roadTraveled?: number | null,
      time?:  {
        __typename: "Time",
        start?: number | null,
        end?: number | null,
      } | null,
      user?: string | null,
      carID: string,
      duration?: number | null,
      fee?: number | null,
      paidViaCreditCard?: number | null,
      paidViaWallet?: number | null,
      rating?: number | null,
      reservationFee?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTripsQueryVariables = {
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTripsQuery = {
  syncTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      id: string,
      roadTraveled?: number | null,
      time?:  {
        __typename: "Time",
        start?: number | null,
        end?: number | null,
      } | null,
      user?: string | null,
      carID: string,
      duration?: number | null,
      fee?: number | null,
      paidViaCreditCard?: number | null,
      paidViaWallet?: number | null,
      rating?: number | null,
      reservationFee?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCarQueryVariables = {
  id: string,
};

export type GetCarQuery = {
  getCar?:  {
    __typename: "Car",
    id: string,
    name?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    inUse?: boolean | null,
    battery?: number | null,
    Trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        roadTraveled?: number | null,
        time?:  {
          __typename: "Time",
          start?: number | null,
          end?: number | null,
        } | null,
        user?: string | null,
        carID: string,
        duration?: number | null,
        fee?: number | null,
        paidViaCreditCard?: number | null,
        paidViaWallet?: number | null,
        rating?: number | null,
        reservationFee?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    connected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCarsQuery = {
  listCars?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      name?: string | null,
      location?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      inUse?: boolean | null,
      battery?: number | null,
      Trips?:  {
        __typename: "ModelTripConnection",
        items:  Array< {
          __typename: "Trip",
          id: string,
          roadTraveled?: number | null,
          time?:  {
            __typename: "Time",
            start?: number | null,
            end?: number | null,
          } | null,
          user?: string | null,
          carID: string,
          duration?: number | null,
          fee?: number | null,
          paidViaCreditCard?: number | null,
          paidViaWallet?: number | null,
          rating?: number | null,
          reservationFee?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      connected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCarsQuery = {
  syncCars?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      name?: string | null,
      location?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      inUse?: boolean | null,
      battery?: number | null,
      Trips?:  {
        __typename: "ModelTripConnection",
        items:  Array< {
          __typename: "Trip",
          id: string,
          roadTraveled?: number | null,
          time?:  {
            __typename: "Time",
            start?: number | null,
            end?: number | null,
          } | null,
          user?: string | null,
          carID: string,
          duration?: number | null,
          fee?: number | null,
          paidViaCreditCard?: number | null,
          paidViaWallet?: number | null,
          rating?: number | null,
          reservationFee?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      connected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    Username?: string | null,
    Attributes?:  Array< {
      __typename: "Attribute",
      Name?: string | null,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    Username?: string | null,
    Attributes?:  Array< {
      __typename: "Attribute",
      Name?: string | null,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    Username?: string | null,
    Attributes?:  Array< {
      __typename: "Attribute",
      Name?: string | null,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnCreateTripSubscription = {
  onCreateTrip?:  {
    __typename: "Trip",
    id: string,
    roadTraveled?: number | null,
    time?:  {
      __typename: "Time",
      start?: number | null,
      end?: number | null,
    } | null,
    user?: string | null,
    carID: string,
    duration?: number | null,
    fee?: number | null,
    paidViaCreditCard?: number | null,
    paidViaWallet?: number | null,
    rating?: number | null,
    reservationFee?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnUpdateTripSubscription = {
  onUpdateTrip?:  {
    __typename: "Trip",
    id: string,
    roadTraveled?: number | null,
    time?:  {
      __typename: "Time",
      start?: number | null,
      end?: number | null,
    } | null,
    user?: string | null,
    carID: string,
    duration?: number | null,
    fee?: number | null,
    paidViaCreditCard?: number | null,
    paidViaWallet?: number | null,
    rating?: number | null,
    reservationFee?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnDeleteTripSubscription = {
  onDeleteTrip?:  {
    __typename: "Trip",
    id: string,
    roadTraveled?: number | null,
    time?:  {
      __typename: "Time",
      start?: number | null,
      end?: number | null,
    } | null,
    user?: string | null,
    carID: string,
    duration?: number | null,
    fee?: number | null,
    paidViaCreditCard?: number | null,
    paidViaWallet?: number | null,
    rating?: number | null,
    reservationFee?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnCreateCarSubscription = {
  onCreateCar?:  {
    __typename: "Car",
    id: string,
    name?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    inUse?: boolean | null,
    battery?: number | null,
    Trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        roadTraveled?: number | null,
        time?:  {
          __typename: "Time",
          start?: number | null,
          end?: number | null,
        } | null,
        user?: string | null,
        carID: string,
        duration?: number | null,
        fee?: number | null,
        paidViaCreditCard?: number | null,
        paidViaWallet?: number | null,
        rating?: number | null,
        reservationFee?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    connected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnUpdateCarSubscription = {
  onUpdateCar?:  {
    __typename: "Car",
    id: string,
    name?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    inUse?: boolean | null,
    battery?: number | null,
    Trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        roadTraveled?: number | null,
        time?:  {
          __typename: "Time",
          start?: number | null,
          end?: number | null,
        } | null,
        user?: string | null,
        carID: string,
        duration?: number | null,
        fee?: number | null,
        paidViaCreditCard?: number | null,
        paidViaWallet?: number | null,
        rating?: number | null,
        reservationFee?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    connected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnDeleteCarSubscription = {
  onDeleteCar?:  {
    __typename: "Car",
    id: string,
    name?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    inUse?: boolean | null,
    battery?: number | null,
    Trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        roadTraveled?: number | null,
        time?:  {
          __typename: "Time",
          start?: number | null,
          end?: number | null,
        } | null,
        user?: string | null,
        carID: string,
        duration?: number | null,
        fee?: number | null,
        paidViaCreditCard?: number | null,
        paidViaWallet?: number | null,
        rating?: number | null,
        reservationFee?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    connected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
