import { type FunctionComponent } from "react";
import { Oval } from "react-loader-spinner";

interface SpinnerProps {
  spinnerSize?: number;
}

const Spinner: FunctionComponent<SpinnerProps> = ({ spinnerSize = 60 }) => {
  return (
    <Oval
      height={spinnerSize}
      width={spinnerSize}
      color="rgb(107 114 128)"
      wrapperStyle={{}}
      wrapperClass="justify-center items-center h-screen"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="rgb(107 114 128)"
      strokeWidth={4}
      strokeWidthSecondary={5}
    />
  );
};

export default Spinner;
