import { CATEGORIES } from "@constants/categories";
import z from "zod";
import { BUDGETS_PERIODS } from "../constants/budgetPeriod";

export const budgetSchema = z.object({
    description: z.string({ required_error: "Ingresa una descripción" })
        .min(1, "Ingresa una descripción"),
    category: z.enum(Object.values(CATEGORIES), {
        required_error: "Selecciona una categoría",
    }),
    periodType: z.enum(Object.values(BUDGETS_PERIODS), {
        required_error: "Selecciona un periodo",
    }),
    limit: z.coerce.number({invalid_type_error: "Ingresa un monto numérico"})
        .positive("El monto debe ser mayor a 0.00"),
    accountId: z.number({required_error: "Selecciona una cuenta"}),

})