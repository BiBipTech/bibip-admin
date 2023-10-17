import {
  type QueryObserverResult,
  type RefetchOptions,
  type RefetchQueryFilters,
} from "@tanstack/react-query";
import { useState, type FunctionComponent } from "react";
import { type Car } from "~/API";
import ProgressBar from "~/components/bars/ProgressBar";
import GenericActionButton from "~/components/buttons/GenericActionButton";
import AvailabilityCard from "~/components/cards/AvailabilityCard";

export interface CarTileProps {
  car: Car;
  refetchCars: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>,
  ) => Promise<QueryObserverResult>;
}

const CarTile: FunctionComponent<CarTileProps> = ({ car, refetchCars }) => {
  const [visible, setVisible] = useState(false);

  return (
    <tr key={car.id} className="items-center ">
      <td className="px-4 py-5 text-center">
        <AvailabilityCard inUse={car.inUse ?? true} />
      </td>
      <td className="px-4 py-5 text-center">
        {car.name ? (
          <text className="text-center">{car.name}</text>
        ) : (
          <text>-</text>
        )}
      </td>
      <td className="px-4 py-5 text-center">
        <ProgressBar valuePercentage={car.battery ?? 0} />
      </td>
    </tr>
  );
};

export default CarTile;
