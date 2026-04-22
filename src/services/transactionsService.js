import { transactions } from "../data/appData.js";
import { CATEGORY_ICONS } from "../constants/categoryIcon.js";

export const transactionsService = () => {
    return {
        getTransactions: () => {
            const transactionsWithIcon = transactions.map(transaction => {
                return {...transaction, icon: CATEGORY_ICONS[transaction.category]}
            })

            return transactionsWithIcon
        }
    }
}