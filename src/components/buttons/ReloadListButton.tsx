import { type FunctionComponent } from "react";
import { AiOutlineReload } from "react-icons/ai";

interface ReloadListButtonProps {
  refetch: () => Promise<unknown>;
}

const ReloadListButton: FunctionComponent<ReloadListButtonProps> = ({
  refetch,
}) => {
  return (
    <button
      className={`
      items-end justify-end rounded-full
      border border-green-500 bg-white
      p-3 text-green-500
      transition-all duration-150
      hover:bg-green-500 hover:text-white
      active:border-green-700 active:bg-green-700 active:text-white
      `}
      onClick={() => {
        refetch()
          .then(() => undefined)
          .catch(() => undefined);
      }}
    >
      <AiOutlineReload size={24} />
    </button>
  );
};

export default ReloadListButton;
