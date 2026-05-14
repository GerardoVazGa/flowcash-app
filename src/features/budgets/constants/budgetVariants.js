import { BUDGET_STATUS } from "./budgetStatus";

export const BUDGET_STATUS_VARIANTS = {
    [BUDGET_STATUS.HEALTHY]: "safe",
    [BUDGET_STATUS.WARNING]: "caution",
    [BUDGET_STATUS.CRITICAL]: "warning",
    [BUDGET_STATUS.EXCEEDED]: "danger",
    [BUDGET_STATUS.LIMIT_REACHED]: "danger",
    [BUDGET_STATUS.AT_RISK]: "danger"
}