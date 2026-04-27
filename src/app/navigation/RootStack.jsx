import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabsNavigator } from "./TabsNavigator"

const Stack = createNativeStackNavigator()

export function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={TabsNavigator} />

            
        </Stack.Navigator>
    )
}