export function calculateIncomes(transactions) {
    return transactions
        .filter(transaction => (transaction.type || "").toLowerCase().trim() === "income")
        .reduce((acc, transaction) => acc + transaction.amount, 0)
}