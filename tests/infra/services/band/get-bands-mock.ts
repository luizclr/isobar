import { RequestHandler } from "axios-mock-adapter";
import { StatusCodes } from "http-status-codes";

import { Band } from "~/entities/band";

import { mock } from "#/test-utils/mock";

export class GetBandsMock {
  private readonly mockInstance: RequestHandler;

  public constructor(private readonly response: Band[]) {
    this.mockInstance = mock.onGet("/bands");
  }

  public success(): void {
    this.mockInstance.replyOnce(StatusCodes.OK, this.response);
  }

  public notFound(): void {
    this.mockInstance.replyOnce(StatusCodes.NOT_FOUND);
  }

  public genericError(): void {
    this.mockInstance.replyOnce(StatusCodes.BAD_REQUEST);
  }
}
