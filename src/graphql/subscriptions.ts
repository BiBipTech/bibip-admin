/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrip = /* GraphQL */ `
  subscription OnCreateTrip($filter: ModelSubscriptionTripFilterInput) {
    onCreateTrip(filter: $filter) {
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
export const onUpdateTrip = /* GraphQL */ `
  subscription OnUpdateTrip($filter: ModelSubscriptionTripFilterInput) {
    onUpdateTrip(filter: $filter) {
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
export const onDeleteTrip = /* GraphQL */ `
  subscription OnDeleteTrip($filter: ModelSubscriptionTripFilterInput) {
    onDeleteTrip(filter: $filter) {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
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
