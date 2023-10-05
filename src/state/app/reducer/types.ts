export enum AppActionTypes {
  loading = "LOADING",
  error = "ERROR",
  setFilter = "SET_FILTER",
  reset = "RESET",
}

export interface LoadingAction {
  type: AppActionTypes.loading;
  payload: {
    isLoading: boolean;
  };
}

export interface ErrorAction {
  type: AppActionTypes.error;
}

export interface SetFilterAction {
  type: AppActionTypes.setFilter;
  payload: {
    filter: string;
  };
}

export interface ResetAction {
  type: AppActionTypes.reset;
}

export type AppActions = LoadingAction | ErrorAction | SetFilterAction | ResetAction;
