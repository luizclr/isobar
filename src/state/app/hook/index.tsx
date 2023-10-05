import { useContext } from "react";

import { setFilter } from "~/state/app/actions/set-filter";
import { setIsLoading } from "~/state/app/actions/set-is-loading";
import { UseAppTypes } from "~/state/app/hook/types";
import GlobalContext from "~/state/global/context";

export const useApp = (): UseAppTypes => {
  const { app, appDispatch, storageService, bandService } = useContext(GlobalContext);

  return {
    ...app,
    storageService,
    bandService,
    dispatch: appDispatch,
    setIsLoading: setIsLoading(appDispatch),
    setFilter: setFilter(appDispatch),
  };
};
