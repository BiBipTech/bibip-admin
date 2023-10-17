import { type MouseEventHandler, type FunctionComponent } from "react";
import { twMerge } from "tailwind-merge";

interface GenericActionButtonProps {
  action: MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  disabled?: boolean;
  className?: string;
}

const GenericActionButton: FunctionComponent<GenericActionButtonProps> = ({
  action,
  text,
  disabled,
  className,
}) => {
  const finalClass = twMerge(
    `
  flex-1 items-center justify-center rounded-md 
  border border-blue-600 bg-white
  px-6 py-2 text-blue-600 shadow-sm
  transition-all duration-150
  hover:bg-blue-600 hover:text-white hover:shadow-lg
  disabled:pointer-events-none disabled:border-blue-300
  disabled:text-blue-300
  active:bg-blue-800 active:border-blue-800 active:text-white
  `,
    className
  );
  return (
    <button
      className={finalClass}
      onClick={action}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
};

export default GenericActionButton;
