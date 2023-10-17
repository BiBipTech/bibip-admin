import Link from "next/link";
import { type FunctionComponent } from "react";
import { type IconType } from "react-icons/lib/esm/iconBase";

interface NavButtonProps {
  to: string;
  name: string;
  Icon: IconType;
  active: boolean;
}

const NavButton: FunctionComponent<NavButtonProps> = ({
  to,
  name,
  Icon,
  active,
}) => {
  if (active) {
    return (
      <Link href={to} passHref className="w-full">
        <div className="group relative flex w-full flex-row items-center rounded-[5px] bg-blue-600 px-4 py-2 transition-all duration-150 hover:cursor-pointer hover:bg-blue-800">
          <span className="absolute left-0 h-6 w-1 rounded-r-sm bg-white " />
          <Icon size={20} className="fill-white " />
          <p className="pl-2 text-base font-medium text-white">{name}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={to} passHref className="w-full">
      <div className="group flex w-full flex-row items-center rounded-[5px] bg-transparent px-4 py-2 transition-all duration-150 hover:bg-gray-700">
        <Icon size={20} className="fill-gray-300" />
        <p className="pl-2 text-base font-medium text-gray-300">{name}</p>
      </div>
    </Link>
  );
};

export default NavButton;
