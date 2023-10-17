import { type FunctionComponent } from "react";

import { FiLogOut } from "react-icons/fi";

interface SessionButtonProps {
  onClick: () => void;
  sessionType: "Login" | "Logout" | "Test";
}

const SessionButton: FunctionComponent<SessionButtonProps> = ({
  onClick,
  sessionType,
}) => {
  return (
    <button onClick={onClick} className="w-full ">
      <div className="group flex w-full flex-row items-center justify-center rounded-[5px] bg-gray-600 px-4 py-2 hover:bg-gray-700">
        <p className="pr-2 text-lg font-medium text-gray-100">{sessionType}</p>
        <FiLogOut size={22} color="rgb(243 244 246)" />
      </div>
    </button>
  );
};

export default SessionButton;
