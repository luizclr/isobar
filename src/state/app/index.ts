import { Dispatch } from "react";

import { AppActions } from "~/state/app/reducer/types";

export type AppState = {
  isLoading: boolean;
  error: boolean;
  filter: string;
};

export const initialAppState: AppState = {
  isLoading: false,
  error: false,
  filter: "",
};

export type AppDispatch = Dispatch<AppActions>;
