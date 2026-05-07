import { SectionList } from "react-native";
import { AppText } from "../../ui/AppText";
import { TransactionItem } from "./TransactionItem";

export function TransactionGroupList({transactions}) {
    return (
        <SectionList 
            sections={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderSectionHeader={({section}) => (
                <AppText variant="headline" color="text">{section.header}</AppText>
            )}
            renderItem={({item}) => (
                <TransactionItem transaction={item} />
            )}
        />
    )
}