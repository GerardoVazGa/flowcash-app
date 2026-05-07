export function calculateIncomes(transactions) {
    return transactions
        .filter(transaction => transaction.type === "income")
        .reduce((acc, transaction) => acc + transaction.amount, 0)
}