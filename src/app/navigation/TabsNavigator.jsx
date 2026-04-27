import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen"
import { Placeholder } from "../../components/ui/Placeholder"

const Tab = createBottomTabNavigator()

export function TabsNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            
        </Tab.Navigator>
    )
}