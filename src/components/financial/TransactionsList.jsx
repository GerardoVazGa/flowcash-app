import { ScrollView, StyleSheet, View } from "react-native";
import { TransactionItem } from "./TransactionItem";

export function TransactionsList({transactions}) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {transactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction}/>
            ))}
        </ScrollView>
    )
}