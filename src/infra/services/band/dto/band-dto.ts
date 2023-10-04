import { z } from "zod";

export const BandDTO = z.object({
  id: z.string().uuid(),
  name: z.string(),
  image: z.string(),
  genre: z.string(),
  biography: z.string(),
  numPlays: z.number(),
  albums: z.array(z.string()),
});
