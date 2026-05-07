import { transactionsService } from "../../services/transactionsService"

export const useRawTransactions = () => {
    const transactions = transactionsService().getTransactions()
    
    return {
        rawTransactions: transactions
    }
}