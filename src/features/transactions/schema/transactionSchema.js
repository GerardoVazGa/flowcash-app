import { z } from "zod"
import { TRANSACTION_TYPE } from "../constants/transactionType"
import { CATEGORIES } from "@constants/categories"

export const transactionSchema = z.object({
    amount: z.coerce.number({invalid_type_error: "Ingresa un monto numérico"})
        .positive("El monto debe ser mayor a 0.00"),
    type: z.enum([TRANSACTION_TYPE.INCOME, TRANSACTION_TYPE.EXPENSE], {
        required_error: "Selecciona un tipo de transacción",
    }),
    category: z.enum(Object.values(CATEGORIES), {
        required_error: "Selecciona una categoría",
    }),
    date: z.string({ required_error: "Selecciona una fecha" })
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato de fecha inválido"),
    description: z.string({ required_error: "Ingresa una descripción" })
        .min(1, "Ingresa una descripción"),
})