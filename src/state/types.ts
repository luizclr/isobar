import { StorageService } from "~/data/services/storage/storage-service";
import AuthService from "~/infra/services/auth/auth";
import UserService from "~/infra/services/user/user";

export type ServicesTypes = {
  authService: AuthService;
  userService: UserService;
  storageService: StorageService;
};
