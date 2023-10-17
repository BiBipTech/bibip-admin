import { type FunctionComponent } from "react";

interface ModalSubmitButtonProps {
  isValid: boolean;
  action: () => void;
}

const ModalSubmitButton: FunctionComponent<ModalSubmitButtonProps> = ({
  isValid,
  action,
}) => {
  return (
    <button
      className={`
      mb-1 mr-1 rounded
      border border-green-500
      bg-white px-6 py-3 text-sm font-bold uppercase
      text-green-500 shadow outline-none
      transition-all duration-150 ease-linear
      hover:bg-green-500 hover:text-white hover:shadow-lg
      focus:outline-none
      active:border-green-700 active:bg-green-700
      active:text-white disabled:pointer-events-none
      disabled:border-green-200 disabled:bg-white disabled:text-green-300`}
      type="button"
      onClick={() => {
        action();
      }}
      disabled={!isValid}
    >
      Onayla
    </button>
  );
};

export default ModalSubmitButton;
