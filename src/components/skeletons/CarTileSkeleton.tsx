import { type FunctionComponent } from "react";

const CarTileSkeleton: FunctionComponent = () => {
  return (
    <div className="mb-2 flex h-20 w-full animate-pulse flex-row items-center justify-around bg-gray-300 px-8">
      <div className="h-2 w-24 rounded-full bg-gray-500" />
      <div className=" h-2 w-32 rounded-full bg-gray-500" />
      <div className=" h-2 w-24 rounded-full bg-gray-500" />
      <div className=" h-2 w-24 rounded-full bg-gray-500" />

      <div className=" h-8 w-48 rounded-full bg-gray-500" />
    </div>
  );
};

export default CarTileSkeleton;
