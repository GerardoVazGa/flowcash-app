import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { BudgetsForm } from "../components/budgetForms/BudgetsForm";

export function BudgetFormBottomSheet({ sheetRef }) {
    const snapPoints = useMemo(() => ["90%"], [])

    const handleDismiss = () => {
        sheetRef.current?.dismiss()
    }
    
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
            <BudgetsForm onClose={handleDismiss}/>
        </BottomSheetModal>
    )
}