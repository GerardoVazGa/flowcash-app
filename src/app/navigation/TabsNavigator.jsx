import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen"
import { TransactionsScreen } from "@features/transactions/screens/TransactionsScreen.jsx"
import { BudgetsScreen } from "@features/budgets/screens/BudgetsScreen.jsx"

const Tab = createBottomTabNavigator()

export function TabsNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="Budgets" component={BudgetsScreen}/>
        </Tab.Navigator>
    )
}