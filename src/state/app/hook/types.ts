import { StorageService } from "~/data/services/storage/storage-service";
import { AppDispatch, AppState } from "~/state/app";

type AppActionTypes = {
  setIsLoading: (isLoading: boolean) => void;
  storageService: StorageService;
};

export type UseAppTypes = AppState & AppActionTypes & { dispatch: AppDispatch };
