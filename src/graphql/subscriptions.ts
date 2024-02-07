/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      Username
      Attributes {
        Name
        Value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      Username
      Attributes {
        Name
        Value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      Username
      Attributes {
        Name
        Value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTrip = /* GraphQL */ `
  subscription OnCreateTrip($filter: ModelSubscriptionTripFilterInput) {
    onCreateTrip(filter: $filter) {
      id
      roadTraveled
      time {
        start
        end
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
        }
        nextToken
        startedAt
      }
      connected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      connected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      connected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
