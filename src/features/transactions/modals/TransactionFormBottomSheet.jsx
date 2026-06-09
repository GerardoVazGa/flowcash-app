import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { TransactionsForm } from "../components/forms/TransactionsForm";

export function TransactionFormBottomSheet({sheetRef}) {
    const snapPoints = useMemo(() => ["90%"], [])

    const handleDismiss = () => sheetRef.current?.dismiss()

    return (
        <BottomSheetModal 
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            stackBehavior="push"
            enableDynamicSizing={false}
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"
        >
            <TransactionsForm onCloseSheet={handleDismiss}/>
        </BottomSheetModal>
    )
}