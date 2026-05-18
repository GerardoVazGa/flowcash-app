export const useRawBudgets = () => {
    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        const data = budgetsService().getBudgets()

        const activeBudgets = data.filter(budget => !budget.archived)
        
        setBudgets(activeBudgets)
    }, [])

    return {
        rawBudgets: budgets
    }
}