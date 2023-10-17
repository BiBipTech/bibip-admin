import { useContext, useEffect } from "react";
import { LoaderContext } from "../contexts/LoaderContext";

export const useLoader = (conditionArray: boolean[]) => {
  const loader = useContext(LoaderContext);

  useEffect(() => {
    // return () => loader.setIsLoading(false);
  }, [conditionArray, loader]);
};
