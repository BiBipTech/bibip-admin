import { type FunctionComponent } from "react";

interface MenuButtonProps {
  setShowSidebar: (showSidebar: boolean) => void;
  showSidebar: boolean;
}

const MenuButton: FunctionComponent<MenuButtonProps> = (
  props: MenuButtonProps
) => {
  return (
    <button
      className={`group w-fit space-y-1 rounded bg-teal-500 p-2`}
      onClick={() => {
        props.setShowSidebar(!props.showSidebar);
      }}
    >
      <span
        className={`block h-0.5 w-5 bg-teal-200 transition duration-300 ease-in-out group-hover:bg-white ${
          props.showSidebar ? "translate-y-1.5 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-5 bg-teal-200 transition duration-300 ease-in-out group-hover:bg-white ${
          props.showSidebar ? "opacity-0 " : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-5 bg-teal-200 transition duration-300 ease-in-out group-hover:bg-white ${
          props.showSidebar ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};

export default MenuButton;
