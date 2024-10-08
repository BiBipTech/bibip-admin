import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerAttribute = {
  readonly Name?: string | null;
  readonly Value?: string | null;
}

type LazyAttribute = {
  readonly Name?: string | null;
  readonly Value?: string | null;
}

export declare type Attribute = LazyLoading extends LazyLoadingDisabled ? EagerAttribute : LazyAttribute

export declare const Attribute: (new (init: ModelInit<Attribute>) => Attribute)

type EagerTime = {
  readonly start?: number | null;
  readonly end?: number | null;
}

type LazyTime = {
  readonly start?: number | null;
  readonly end?: number | null;
}

export declare type Time = LazyLoading extends LazyLoadingDisabled ? EagerTime : LazyTime

export declare const Time: (new (init: ModelInit<Time>) => Time)

type EagerLocation = {
  readonly lat: number;
  readonly lng: number;
}

type LazyLocation = {
  readonly lat: number;
  readonly lng: number;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly Attributes?: (Attribute | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly Attributes?: (Attribute | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roadTraveled?: number | null;
  readonly time?: Time | null;
  readonly user?: string | null;
  readonly carID: string;
  readonly duration?: number | null;
  readonly fee?: number | null;
  readonly paidViaCreditCard?: number | null;
  readonly paidViaWallet?: number | null;
  readonly rating?: number | null;
  readonly reservationFee?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roadTraveled?: number | null;
  readonly time?: Time | null;
  readonly user?: string | null;
  readonly carID: string;
  readonly duration?: number | null;
  readonly fee?: number | null;
  readonly paidViaCreditCard?: number | null;
  readonly paidViaWallet?: number | null;
  readonly rating?: number | null;
  readonly reservationFee?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Trip = LazyLoading extends LazyLoadingDisabled ? EagerTrip : LazyTrip

export declare const Trip: (new (init: ModelInit<Trip>) => Trip) & {
  copyOf(source: Trip, mutator: (draft: MutableModel<Trip>) => MutableModel<Trip> | void): Trip;
}

type EagerCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly location?: Location | null;
  readonly inUse?: boolean | null;
  readonly battery?: number | null;
  readonly Trips?: (Trip | null)[] | null;
  readonly connected?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Car, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly location?: Location | null;
  readonly inUse?: boolean | null;
  readonly battery?: number | null;
  readonly Trips: AsyncCollection<Trip>;
  readonly connected?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Car = LazyLoading extends LazyLoadingDisabled ? EagerCar : LazyCar

export declare const Car: (new (init: ModelInit<Car>) => Car) & {
  copyOf(source: Car, mutator: (draft: MutableModel<Car>) => MutableModel<Car> | void): Car;
}