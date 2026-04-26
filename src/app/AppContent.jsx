import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { useTheme } from "../hooks/useTheme.js"

export function AppContent() {
    const { theme } = useTheme()
    const styles = getStyles(theme)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HomeScreen />
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surface
    },
})