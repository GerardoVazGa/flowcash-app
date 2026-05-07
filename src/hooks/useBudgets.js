import { useState, useEffect } from "react";
import { budgetsService } from "../services/budgetsServices.js";
import { mapBudgetsWithMetrics } from "../utils/budgets/mapBudgetsWithMetrics.js";
export function useBudgets() {
    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        const data = budgetsService().getBudgets()
        
        const budgetsWithMetrics = mapBudgetsWithMetrics(data)
        
        setBudgets(budgetsWithMetrics)
    }, [])

    return {
        budgets
    }
    
}

