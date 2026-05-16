export const matchesStatus = (budgetStatus, status) => {
    if(!status || status === "ALL") return true

    return budgetStatus === status
}