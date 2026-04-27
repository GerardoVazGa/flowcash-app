import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { useTheme } from "../hooks/useTheme.js"
import { AppNavigator } from "./navigation/AppNavigator.jsx";

export function AppContent() {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <AppNavigator />
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surface
    },
})