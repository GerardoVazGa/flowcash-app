import { budgetsMock } from "../data/budgetsData.js";
export function budgetsService() {
    return {
        getBudgets: () => {
            return budgetsMock
        }
    }
}