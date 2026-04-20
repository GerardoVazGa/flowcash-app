import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS  } from "../../consonants/colors.js";
import { Typography } from "../../consonants/typography.js";
import  { SPACING, RADIUS } from "../../consonants/layout.js";

export function AppButton({
    text, 
    onAction, 
    size = 'sm', 
    rounded = "sm", 
    style
}) {
    return (
        <Pressable 
            onPress={onAction} 
            style={[
                styles.button,
                {
                    backgroundColor: COLORS.light.primary,
                    borderRadius: RADIUS[rounded],
                    padding: SPACING[size]
                },
                
            ]}
        >
            <Text 
                style = {
                    {
                        color: COLORS.light.surface
                    }
                }
            >
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10
    }
})