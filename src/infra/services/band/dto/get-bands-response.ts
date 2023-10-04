import { z } from "zod";

import { BandDTO } from "~/infra/services/band/dto/band-dto";

export const GetBandsResponseDTO = z.array(BandDTO);
