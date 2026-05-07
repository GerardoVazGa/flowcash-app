import { useEffect, useState, useMemo } from "react"
import { transactionsService } from "../../services/transactionsService.js"
import { formatCurrency } from "../../utils/formatters/formatCurrency.js"
import { filterTransactions } from "../../utils/transactions/filterTransactions.js"
import { sortTransactionsByDate } from "../../utils/transactions/sortTransactionsByDate.js"
import { groupTransactionsByDate } from "../../utils/transactions/groupTransactionsBydate.js"
import { calculateIncomes } from "../../utils/transactions/calculateIncomes.js"
import { calculateExpenses } from "../../utils/transactions/calculateExpenses.js"
import { calculateBalance } from "../../utils/transactions/calculateBalance.js"


export const useTransactions = (filters) => {
    const  transactions = transactionsService().getTransactions()

    const filteredTransactions = useMemo(() => {
        return filterTransactions(transactions, filters)
    }, [transactions, filters])

    const sortedTransactions = useMemo(() => {
        return sortTransactionsByDate(filteredTransactions)
    }, [filteredTransactions])

    const groupedTransactions = useMemo(() => {
        return groupTransactionsByDate(sortedTransactions)
    }, [sortedTransactions])

    const incomes = useMemo(() => {
        return calculateIncomes(filteredTransactions)
    }, [filteredTransactions])

    const expenses = useMemo(() => {
        return calculateExpenses(filteredTransactions)
    }, [filteredTransactions])

    const totalBalance = calculateBalance(incomes, expenses)

    

    return {
        transactions: groupedTransactions,
        incomes: formatCurrency(incomes),
        expenses: formatCurrency(expenses),
        totalBalance: formatCurrency(totalBalance)
    }
}