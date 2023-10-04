import { BandService } from "~/data/services/band/band-service";
import { StorageService } from "~/data/services/storage/storage-service";
import AuthService from "~/infra/services/auth/auth";
import UserService from "~/infra/services/user/user";

export type ServicesTypes = {
  authService: AuthService;
  userService: UserService;
  bandService: BandService;
  storageService: StorageService;
};
