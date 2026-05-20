export function calculateExpenses(transactions) {
    return transactions
        .filter(transaction => (transaction.type || "").toLowerCase().trim() === "expense")
        .reduce((acc, transaction) => acc + transaction.amount, 0)
}