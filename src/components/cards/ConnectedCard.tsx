import { type FunctionComponent } from "react";

interface ConnectedCardProps {
  connected: boolean;
}

const ConnectedCard: FunctionComponent<ConnectedCardProps> = ({
  connected,
}) => {
  if (connected)
    return (
      <p className="rounded-md bg-green-200 font-medium text-green-800">
        Bağlı
      </p>
    );
  else
    return (
      <p className="rounded-md bg-red-200 font-medium text-red-700">
        Bağlı Değil
      </p>
    );
};

export default ConnectedCard;
