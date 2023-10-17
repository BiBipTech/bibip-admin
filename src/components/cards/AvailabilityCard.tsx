import { type FunctionComponent } from "react";

interface AvailabilityCardProps {
  inUse: boolean;
}

const AvailabilityCard: FunctionComponent<AvailabilityCardProps> = ({
  inUse,
}) => {
  if (!inUse)
    return (
      <p className="rounded-md bg-green-200 font-medium text-green-800">
        Müsait
      </p>
    );
  else
    return (
      <p className="rounded-md bg-red-200 font-medium text-red-700">
        Müsait Değil
      </p>
    );
};

export default AvailabilityCard;
