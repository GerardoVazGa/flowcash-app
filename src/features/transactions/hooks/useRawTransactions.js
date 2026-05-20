import { useMemo } from "react"
import { transactionsService } from "../services/transactionsService.js"

export const useRawTransactions = () => {
    const transactions = useMemo(() => (
        transactionsService().getTransactions()
    ), [])
    
    return {
        rawTransactions: transactions
    }
}