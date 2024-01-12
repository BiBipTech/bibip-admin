import {
  type QueryObserverResult,
  type RefetchOptions,
  type RefetchQueryFilters,
} from "@tanstack/react-query";
import { useState, type FunctionComponent } from "react";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { type Car } from "~/API";
import ProgressBar from "~/components/bars/ProgressBar";
import GenericActionIconButton from "~/components/buttons/GenericActionIconButton";
import AvailabilityCard from "~/components/cards/AvailabilityCard";

export interface CarTileProps {
  car: Car;
  refetchCars: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>,
  ) => Promise<QueryObserverResult>;
  lock: () => void;
  unlock: () => void;
}

const CarTile: FunctionComponent<CarTileProps> = ({
  car,
  refetchCars,
  lock,
  unlock,
}) => {
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
      <td className="flex flex-row items-center justify-center gap-2 px-4 py-5 text-center">
        <GenericActionIconButton action={lock} Icon={AiOutlineLock} />
        <GenericActionIconButton action={unlock} Icon={AiOutlineUnlock} />
      </td>
    </tr>
  );
};

export default CarTile;
