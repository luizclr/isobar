import { UserListeners } from "~/data/services/user/types";

export interface UserService {
  getUserById: (id: string, listeners: UserListeners) => Promise<void>;
}
