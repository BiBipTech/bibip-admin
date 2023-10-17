import { type FunctionComponent } from "react";

interface PaginationButtonProps {
  action: () => void;
  text: string;
  position?: "left" | "right" | "center";
}

const PaginationButton: FunctionComponent<PaginationButtonProps> = ({
  action,
  text,
  position,
}) => {
  const getRoundedByPosition = () => {
    switch (position) {
      case "left":
        return "rounded-l-md rounded-blue-600";
      case "right":
        return "rounded-r-md rounded-blue-600";
      case "center":
        return "border-blue-600";
      default:
        return "";
    }
  };

  const getBorderByPosition = () => {
    switch (position) {
      case "left":
        return "border-l";
      case "right":
        return "border-x";
      case "center":
        return "border-l";
      default:
        return "";
    }
  };

  return (
    <button
      type="button"
      className={`h-8 items-center justify-center 
      border-y ${getBorderByPosition()} ${getRoundedByPosition()} border-blue-600
      bg-white px-2 text-blue-600
      transition-all duration-150 hover:border-blue-600
      hover:bg-blue-600 hover:text-blue-50 hover:shadow-lg`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default PaginationButton;
