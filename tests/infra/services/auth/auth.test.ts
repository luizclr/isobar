import { faker } from "@faker-js/faker";

import { AuthenticateListeners } from "~/data/services/auth/types";
import { User } from "~/entities/user";
import { AxiosAdapter } from "~/infra/http/axios-adapter";
import AuthService from "~/infra/services/auth/auth";

import { AuthServiceMock } from "#/infra/services/auth/auth-mock";

type makeSutType = {
  sut: AuthService;
  listeners: AuthenticateListeners;
};

const makeSut = (): makeSutType => {
  const sut = new AuthService(new AxiosAdapter("http://www.example.com"));
  const listeners: AuthenticateListeners = {
    onSuccess: jest.fn(),
    onUnauthorized: jest.fn(),
    onError: jest.fn(),
  };

  return {
    sut,
    listeners,
  };
};

describe("AuthService", (): void => {
  it("should call success listener when request is succeeded", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const token = faker.string.alphanumeric(20);
    const user = new User(
      faker.string.uuid(),
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email()
    );
    const authMock = new AuthServiceMock({ email, password }, token, user);

    // when
    authMock.success();

    await sut.authenticate({ email, password }, listeners);

    // then
    expect(listeners.onSuccess).toHaveBeenCalledWith(token, user);
    expect(listeners.onUnauthorized).not.toHaveBeenCalled();
    expect(listeners.onError).not.toHaveBeenCalled();
  });

  it("should call unauthorized listener when parameters doesn't match", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const token = faker.string.alphanumeric(20);
    const user = new User(
      faker.string.uuid(),
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email()
    );
    const authMock = new AuthServiceMock({ email, password }, token, user);

    // when
    authMock.unauthorized();

    await sut.authenticate({ email, password }, listeners);

    // then
    expect(listeners.onSuccess).not.toHaveBeenCalled();
    expect(listeners.onUnauthorized).toHaveBeenCalled();
    expect(listeners.onError).not.toHaveBeenCalled();
  });

  it("should call error listener when get an general error", async (): Promise<void> => {
    // given
    const { sut, listeners } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const token = faker.string.alphanumeric(20);
    const user = new User(
      faker.string.uuid(),
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email()
    );
    const authMock = new AuthServiceMock({ email, password }, token, user);

    // when
    authMock.genericError();

    await sut.authenticate({ email, password }, listeners);

    // then
    expect(listeners.onSuccess).not.toHaveBeenCalled();
    expect(listeners.onUnauthorized).not.toHaveBeenCalled();
    expect(listeners.onError).toHaveBeenCalled();
  });
});
