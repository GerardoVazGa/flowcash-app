import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/useTheme.js";

export function AppIcon({name, color, size, style, background}) {
    const {theme} = useTheme()
    return (
        <View 
            style = {
                [
                    styles.container,
                    background && { 
                        backgroundColor: theme.colors[background] || background
                    },
                    style
                ]
            }
        >
            <Ionicons 
                name={name} 
                size={size} 
                color={theme.colors[color] || color}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    }
})