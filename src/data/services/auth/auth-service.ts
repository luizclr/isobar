import { AuthenticateListeners, AuthenticateRequest } from "~/data/services/auth/types";

export interface AuthService {
  authenticate: (request: AuthenticateRequest, listeners: AuthenticateListeners) => Promise<void>;
}
