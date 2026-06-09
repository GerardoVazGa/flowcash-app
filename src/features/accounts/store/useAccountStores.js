import { create } from "zustand";
import { accountsMock } from "../data/acoountsMock";

export const useAccountsStore = create((set) => ({
    accounts: accountsMock,
    
    setAccounts: (accounts) => set({ accounts }),

    addAccount: (account) => set((state) => (
        { accounts: [...state.accounts, account] }
    )),

    updateAccount: (id, data) => set((state) => ({
        accounts: state.accounts.map((account) => (
            account.id === id ? {...account, ...data} : account
        ))
    })),

    removeAccount: (id) => set((state) => ({
        accounts: state.accounts.filter((account) => account.id !== id)
    }))
}))