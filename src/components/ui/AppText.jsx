import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors.js";
import { Typography } from "../../constants/typography.js";

export function AppText({children, variant = 'display', color = 'black', style}){
    return(
        <Text 
            style={
                [
                    Typography[variant], 
                    {color: COLORS.light[color] || color},
                    style
                ]
            }
        >
            {children}
        </Text>
    )
}

