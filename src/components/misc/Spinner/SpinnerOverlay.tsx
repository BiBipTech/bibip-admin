import { type FunctionComponent } from "react";
import Spinner from "./Spinner";

const SpinnerOverlay: FunctionComponent = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto flex w-1/2 max-w-3xl flex-col items-center justify-center">
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-lg bg-white shadow-eq-md">
            <Spinner spinnerSize={60} />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 backdrop-blur-lg"></div>
    </>
  );
};

export default SpinnerOverlay;
