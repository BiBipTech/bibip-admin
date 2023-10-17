import { type FunctionComponent } from "react";

interface ModalCancelButtonProps {
  action: () => void;
}

const ModalCancelButton: FunctionComponent<ModalCancelButtonProps> = ({
  action,
}) => {
  return (
    <button
      className={`mb-1 mr-1 rounded border border-red-500 bg-white 
      px-6 py-3 text-sm font-bold uppercase text-red-500
      shadow outline-none transition-all duration-150 ease-linear
      hover:bg-red-500 hover:text-white hover:shadow-lg focus:outline-none
      active:border-red-700 active:bg-red-700
      active:text-white disabled:bg-green-200 disabled:hover:shadow`}
      type="button"
      onClick={action}
    >
      İptal
    </button>
  );
};

export default ModalCancelButton;
