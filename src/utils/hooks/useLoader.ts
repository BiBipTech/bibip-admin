import { useContext, useEffect } from "react";
import { LoaderContext } from "../contexts/LoaderContext";

export const useLoader = (conditionArray: boolean[]) => {
  const loader = useContext(LoaderContext);

  useEffect(() => {
    if (conditionArray.includes(true)) loader.setIsLoading(true);

    return () => loader.setIsLoading(false);
  }, [conditionArray, loader]);
};
