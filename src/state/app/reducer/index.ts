import { AppState, initialAppState } from "~/state/app";
import { AppActionTypes, AppActions } from "~/state/app/reducer/types";

export const AppReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case AppActionTypes.loading:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case AppActionTypes.error:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case AppActionTypes.setFilter:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case AppActionTypes.reset:
      return initialAppState;
    default:
      return state;
  }
};
