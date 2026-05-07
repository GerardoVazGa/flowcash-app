import { useEffect, useState } from "react"
import { transactionsService } from "../services/transactionsService.js"
import { formatCurrency } from "../utils/formatters/formatCurrency.js"

export const useFinances = () => {
    const  transactions = transactionsService().getTransactions()

    const incomes = transactions.filter(transaction => transaction.type === "income").reduce((totalIncomes, transaction) => totalIncomes + transaction.amount, 0)
    const expenses = transactions.filter(transaction => transaction.type === "expense").reduce((totalExpenses, transaction) => totalExpenses + transaction.amount, 0)

    const totalBalance = incomes - expenses

    return {
        transactions,
        incomes: formatCurrency(incomes),
        expenses: formatCurrency(expenses),
        totalBalance: formatCurrency(totalBalance)
    }
}