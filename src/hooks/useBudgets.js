import { useState, useEffect } from "react";
import { budgetsService } from "../services/budgetsService";
import { budgetMetrics } from "../utils/budgetMetrics";
export function useBudgets() {
    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        const data = budgetsService.getBudgets()
        
        const budgetsWithMetrics = data.map(budget => ({
            ...budget,
            ...budgetMetrics(budget)   
        }))
        
        setBudgets(budgetsWithMetrics)
    }, [])

    return {
        budgets
    }
    
}

