import { GetBandByIdListeners, GetBandsListeners } from "~/data/services/band/types";

export interface BandService {
  getBands: (listeners: GetBandsListeners) => Promise<void>;
  getBandById: (id: string, listeners: GetBandByIdListeners) => Promise<void>;
}
