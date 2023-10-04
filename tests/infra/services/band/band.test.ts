import { faker } from "@faker-js/faker";

import { BandService } from "~/data/services/band/band-service";
import { GetBandByIdListeners, GetBandsListeners } from "~/data/services/band/types";
import { Band } from "~/entities/band";
import { AxiosAdapter } from "~/infra/http/axios-adapter";
import AppBandService from "~/infra/services/band/band";

import { GetBandByIdMock } from "#/infra/services/band/get-band-by-id-mock";
import { GetBandsMock } from "#/infra/services/band/get-bands-mock";

type makeSutType = {
  sut: BandService;
  getBandsListeners: GetBandsListeners;
  getBandByIdListeners: GetBandByIdListeners;
};

const makeSut = (): makeSutType => {
  const sut = new AppBandService(new AxiosAdapter("http://www.example.com"));
  const getBandsListeners: GetBandsListeners = {
    onSuccess: jest.fn(),
    onError: jest.fn(),
  };

  const getBandByIdListeners: GetBandByIdListeners = {
    onSuccess: jest.fn(),
    onNotFound: jest.fn(),
    onError: jest.fn(),
  };

  return {
    sut,
    getBandsListeners,
    getBandByIdListeners,
  };
};

const makeBand = (): Band => ({
  id: faker.string.uuid(),
  albums: [faker.string.uuid()],
  biography: faker.lorem.paragraph(),
  genre: faker.word.sample(),
  image: faker.internet.url(),
  name: faker.word.sample(),
  numPlays: faker.number.int({ max: 1000 }),
});

// eslint-disable-next-line max-lines-per-function
describe("BandService", (): void => {
  describe(".getBands()", (): void => {
    it("should call success listener when request is succeeded", async (): Promise<void> => {
      // given
      const { sut, getBandsListeners } = makeSut();
      const response: Band[] = [makeBand(), makeBand()];
      const getBandsMock = new GetBandsMock(response);

      // when
      getBandsMock.success();

      await sut.getBands(getBandsListeners);

      // then
      expect(getBandsListeners.onSuccess).toHaveBeenCalledWith(response);
      expect(getBandsListeners.onError).not.toHaveBeenCalled();
    });

    it("should call error listener when get an general error", async (): Promise<void> => {
      // given
      const { sut, getBandsListeners } = makeSut();
      const response: Band[] = [makeBand(), makeBand()];
      const getBandsMock = new GetBandsMock(response);

      // when
      getBandsMock.genericError();

      await sut.getBands(getBandsListeners);

      // then
      expect(getBandsListeners.onSuccess).not.toHaveBeenCalled();
      expect(getBandsListeners.onError).toHaveBeenCalled();
    });
  });

  describe(".getBandById()", (): void => {
    it("should call success listener when request is succeeded", async (): Promise<void> => {
      // given
      const { sut, getBandByIdListeners } = makeSut();
      const band: Band = makeBand();
      const id = band.id;
      const getBandByIdMock = new GetBandByIdMock(id, band);

      // when
      getBandByIdMock.success();

      await sut.getBandById(id, getBandByIdListeners);

      // then
      expect(getBandByIdListeners.onSuccess).toHaveBeenCalledWith(band);
      expect(getBandByIdListeners.onNotFound).not.toHaveBeenCalled();
      expect(getBandByIdListeners.onError).not.toHaveBeenCalled();
    });

    it("should call noFound listener when user not found", async (): Promise<void> => {
      // given
      const { sut, getBandByIdListeners } = makeSut();
      const band: Band = makeBand();
      const id = band.id;
      const getBandByIdMock = new GetBandByIdMock(id, band);

      // when
      getBandByIdMock.notFound();

      await sut.getBandById(id, getBandByIdListeners);

      // then
      expect(getBandByIdListeners.onSuccess).not.toHaveBeenCalled();
      expect(getBandByIdListeners.onNotFound).toHaveBeenCalled();
      expect(getBandByIdListeners.onError).not.toHaveBeenCalled();
    });

    it("should call error listener when get an general error", async (): Promise<void> => {
      // given
      const { sut, getBandByIdListeners } = makeSut();
      const band: Band = makeBand();
      const id = band.id;
      const getBandByIdMock = new GetBandByIdMock(id, band);

      // when
      getBandByIdMock.genericError();

      await sut.getBandById(id, getBandByIdListeners);

      // then
      expect(getBandByIdListeners.onSuccess).not.toHaveBeenCalled();
      expect(getBandByIdListeners.onNotFound).not.toHaveBeenCalled();
      expect(getBandByIdListeners.onError).toHaveBeenCalled();
    });
  });
});
