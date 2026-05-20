import { format, isToday, isYesterday } from "date-fns";
import { es } from "date-fns/locale";

export function groupTransactionsByDate(transactions) {
    const groupsTransactions = {}

    transactions.forEach(transaction => {
        const date = new Date(transaction.date)

        let key

        if(isToday(date)){
            key = "Hoy"
        } else if(isYesterday(date)) {
            key = "Ayer"
        } else {
            key = format(date, "dd 'de' MMMM, yyyy", {locale: es})
        }

        if(!groupsTransactions[key]) {
            groupsTransactions[key] = []
        }

        groupsTransactions[key].push(transaction)
    })

    const groups = Object.keys(groupsTransactions).map(key => (
        {
            id: key,
            header: key,
            data: groupsTransactions[key]
        }
    ))

    return groups
}