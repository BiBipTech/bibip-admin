import { type FunctionComponent } from "react";

interface ProgressBarProps {
  valuePercentage: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  valuePercentage: value,
}) => {
  const fillerRelativePercentage = (100 / value) * 100;

  return (
    <div
      className="flex items-center"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <div className="h-4 flex-1 overflow-hidden rounded-md bg-gray-300">
        <div className="relative flex w-full items-center justify-center">
          <p className="absolute mt-4 items-center justify-center text-xs text-gray-700">
            {value.toFixed(0)}%
          </p>
        </div>
        <div className={`h-4 overflow-hidden`} style={{ width: `${value}%` }}>
          <div
            className={`h-4 bg-gradient-to-r from-red-500 via-yellow-300 to-green-400`}
            style={{ width: `${fillerRelativePercentage}%` }}
          />
          p
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
