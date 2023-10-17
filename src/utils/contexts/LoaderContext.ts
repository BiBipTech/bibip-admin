import { createContext, type Dispatch, type SetStateAction } from "react";

export const LoaderContext = createContext<{
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}>({
  isLoading: false,
  setIsLoading: () => false,
});
