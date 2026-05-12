import { useState, useEffect } from "react";
import { budgetsService } from "../services/budgetsServices.js";
import { mapBudgetsWithMetrics } from "../utils/mapBudgetsWithMetrics.js";
export function useBudgets() {
    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        const data = budgetsService().getBudgets()

        const activeBudgets = data.filter(budget => !budget.archived)
        
        const budgetsWithMetrics = mapBudgetsWithMetrics(activeBudgets)
        
        setBudgets(budgetsWithMetrics)
    }, [])

    return {
        budgets
    }
    
}

