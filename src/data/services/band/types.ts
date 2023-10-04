import { Band } from "~/entities/band";

export type GetBandsListeners = {
  onSuccess: (bands: Band[]) => void;
  onError: () => void;
};

export type GetBandByIdListeners = {
  onSuccess: (band: Band) => void;
  onNotFound: () => void;
  onError: () => void;
};
