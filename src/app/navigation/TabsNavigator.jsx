import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen"
import { TransactionsScreen } from "@features/transactions/screens/TransactionsScreen.jsx"
import { BudgetsScreen } from "@features/budgets/screens/BudgetsScreen.jsx"
import { useNavigationState } from "@react-navigation/native"
import { FAB_CONFIG } from "@constants/fabConfig"
import { TransactionFormBottomSheet } from "@features/transactions/modals/TransactionFormBottomSheet"
import { useRef, useState } from "react"
import { FABButton } from "@components/ui/FABButton"
import { View } from "react-native"

const Tab = createBottomTabNavigator()

export function TabsNavigator() {
    const transactionModalRef = useRef(null)
    const budgetModalRef = useRef(null)

    const [currentRoute, setCurrentRoute] = useState("Home")

    const currentFAB = FAB_CONFIG[currentRoute]


    const handleFABPress = () => {
        switch(currentFAB?.action){
            case "transactions":
                transactionModalRef.current?.present()
                break;
            case "budgets":
                budgetModalRef.current?.present()
                break;
        }
    }
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator 
                screenOptions = {{
                    headerShown: false
                }}
                screenListeners={{
                    state: (e) => {
                        const route = e.data.state.routes[
                            e.data.state.index
                        ].name

                        setCurrentRoute(route)
                    }
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Transactions" component={TransactionsScreen} />
                <Tab.Screen name="Budgets" component={BudgetsScreen} />
            </Tab.Navigator>

            {currentFAB && <FABButton onPress={handleFABPress} icon={currentFAB.icon} />}

            <TransactionFormBottomSheet  sheetRef={transactionModalRef}/>

            <BudgetFormBottomSheet sheetRef={budgetModalRef}/>

            
        </View>
    )
}