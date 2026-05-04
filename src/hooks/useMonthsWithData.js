import { useMemo } from "react";

export function useMonthsWithData(transactions) {
    return useMemo(() => {
        const result = {}

        transactions.forEach(transaction => {
            const date = new Date(transaction.date)
            const month = date.getMonth()
            const year = date.getFullYear()

            if(!result[year]) {
                result[year] = new Set()
            }

            result[year].add(month)
        })

        return result
    }, [transactions])
}