/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrip = /* GraphQL */ `
  mutation CreateTrip(
    $input: CreateTripInput!
    $condition: ModelTripConditionInput
  ) {
    createTrip(input: $input, condition: $condition) {
      id
      roadTraveled
      time {
        start
        end
        __typename
      }
      user
      carID
      duration
      fee
      paidViaCreditCard
      paidViaWallet
      rating
      reservationFee
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTrip = /* GraphQL */ `
  mutation UpdateTrip(
    $input: UpdateTripInput!
    $condition: ModelTripConditionInput
  ) {
    updateTrip(input: $input, condition: $condition) {
      id
      roadTraveled
      time {
        start
        end
        __typename
      }
      user
      carID
      duration
      fee
      paidViaCreditCard
      paidViaWallet
      rating
      reservationFee
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTrip = /* GraphQL */ `
  mutation DeleteTrip(
    $input: DeleteTripInput!
    $condition: ModelTripConditionInput
  ) {
    deleteTrip(input: $input, condition: $condition) {
      id
      roadTraveled
      time {
        start
        end
        __typename
      }
      user
      carID
      duration
      fee
      paidViaCreditCard
      paidViaWallet
      rating
      reservationFee
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      name
      location {
        lat
        lng
        __typename
      }
      inUse
      battery
      Trips {
        items {
          id
          roadTraveled
          time {
            start
            end
            __typename
          }
          user
          carID
          duration
          fee
          paidViaCreditCard
          paidViaWallet
          rating
          reservationFee
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      name
      location {
        lat
        lng
        __typename
      }
      inUse
      battery
      Trips {
        items {
          id
          roadTraveled
          time {
            start
            end
            __typename
          }
          user
          carID
          duration
          fee
          paidViaCreditCard
          paidViaWallet
          rating
          reservationFee
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      name
      location {
        lat
        lng
        __typename
      }
      inUse
      battery
      Trips {
        items {
          id
          roadTraveled
          time {
            start
            end
            __typename
          }
          user
          carID
          duration
          fee
          paidViaCreditCard
          paidViaWallet
          rating
          reservationFee
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
