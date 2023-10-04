import { z } from "zod";

import { userDTO } from "~/infra/services/user/dto/user";

export const AuthenticateResponseDTO = z.object({
  token: z.string(),
  user: userDTO,
});
