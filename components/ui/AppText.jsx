import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../consonants/colors";
import { Typography } from "../../consonants/typography";

export function AppText({children, variant = 'display', color = 'black', style}){
    return(
        <Text 
            style={
                [
                    Typography[variant], 
                    {color: COLORS.light.text || color},
                    style
                ]
            }
        >
            {children}
        </Text>
    )
}

