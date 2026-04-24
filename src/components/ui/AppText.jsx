import { Text, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme.js";

export function AppText({children, variant = 'display', color = 'black', style}){
    const { theme } = useTheme()
    return(
        <Text 
            style={
                [
                    theme.typography[variant], 
                    {color: theme.colors[color] || color},
                    style
                ]
            }
        >
            {children}
        </Text>
    )
}

