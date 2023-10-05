import { BandService } from "~/data/services/band/band-service";
import { StorageService } from "~/data/services/storage/storage-service";
import { AppDispatch, AppState } from "~/state/app";

type AppActionTypes = {
  setIsLoading: (isLoading: boolean) => void;
  setFilter: (filter: string) => void;
  storageService: StorageService;
  bandService: BandService;
};

export type UseAppTypes = AppState & AppActionTypes & { dispatch: AppDispatch };
