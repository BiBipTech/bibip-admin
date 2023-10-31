import { type FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";
import { type IconType } from "react-icons/lib";

interface GenericActionIconButtonProps {
  action: () => void;
  disabled?: boolean;
  className?: string;
  Icon: IconType;
}

const GenericActionIconButton: FunctionComponent<
  GenericActionIconButtonProps
> = ({ action, disabled, className, Icon }) => {
  const finalClass = twMerge(
    `
       items-center justify-center rounded-md 
      border border-blue-600 bg-white
      px-2 py-2 text-blue-600 shadow-sm
      transition-all duration-150
      hover:bg-blue-600 hover:text-white hover:shadow-lg
      disabled:pointer-events-none disabled:border-blue-300
      disabled:text-blue-300
    `,
    className,
  );

  return (
    <button className={finalClass} onClick={action} disabled={disabled}>
      <Icon size={20} />
    </button>
  );
};

export default GenericActionIconButton;
