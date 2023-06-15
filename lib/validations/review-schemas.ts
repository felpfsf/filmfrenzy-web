import { z } from "zod";

export const ReviewSchema = z.object({
  rating: z.number().min(1, "Selecione uma nota").max(5),
  review: z.string().min(1,"Só isso? Escreva um pouco mais").max(650, "Texto muito longo"),
});

export type ReviewInputProps = z.infer<typeof ReviewSchema>;
