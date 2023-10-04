import { StatusCodes } from "http-status-codes";

import { HttpClient } from "~/data/http/http-client";
import { BandService } from "~/data/services/band/band-service";
import { GetBandByIdListeners, GetBandsListeners } from "~/data/services/band/types";
import { ErrorHandler } from "~/infra/http/error-handler";
import { GetBandByIdResponseDTO } from "~/infra/services/band/dto/get-band-by-id-response";
import { GetBandsResponseDTO } from "~/infra/services/band/dto/get-bands-response";

export default class AppBandService implements BandService {
  private readonly URL = "/bands";

  constructor(private readonly httpClient: HttpClient) {}

  public async getBands(listeners: GetBandsListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: this.URL,
        method: "get",
      });

      const bands = await response.getData(GetBandsResponseDTO.parse);

      listeners.onSuccess(bands);
    } catch (error) {
      listeners.onError();
    }
  }

  public async getBandById(id: string, listeners: GetBandByIdListeners): Promise<void> {
    try {
      const response = await this.httpClient.request({
        url: `${this.URL}/${id}`,
        method: "get",
      });

      const band = await response.getData(GetBandByIdResponseDTO.parse);

      listeners.onSuccess(band);
    } catch (error) {
      const errorHandler = new ErrorHandler(error);

      if (errorHandler.hasStatus(StatusCodes.NOT_FOUND)) {
        listeners.onNotFound();
      } else {
        listeners.onError();
      }
    }
  }
}
