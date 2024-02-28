import { useContext } from "react";
import { Context } from "../Context";
import { AppState } from "types";

export const useAppContext = (): AppState => {
  const currentContext = useContext(Context);
  if (!currentContext) {
    throw new Error("currentContext has to be used with in <Context.Provider>");
  }
  return currentContext;
};
