import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { TransactionsForm } from "../components/forms/TransactionsForm";

export function TransactionFormBottomSheet({sheetRef}) {
    const snapPoints = useMemo(() => ["90%"], [])


    return (
        <BottomSheetModal 
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            enableDynamicSizing = {false}
        >
            <TransactionsForm />
        </BottomSheetModal>
    )
}