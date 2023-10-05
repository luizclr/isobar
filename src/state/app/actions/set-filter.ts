import { AppDispatch } from "~/state/app";
import { AppActionTypes } from "~/state/app/reducer/types";

export const setFilter = (dispatch: AppDispatch) => (filter: string) => {
  dispatch({
    type: AppActionTypes.setFilter,
    payload: { filter },
  });
};
