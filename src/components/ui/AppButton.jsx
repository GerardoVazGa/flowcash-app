import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS  } from "../../constants/colors.js";
import { Typography } from "../../constants/typography.js";
import  { SPACING, RADIUS } from "../../constants/layout.js";

export function AppButton({
    children,
    onAction, 
    size = 'sm', 
    rounded = "sm", 
    disabled = false,
    style
}) {
    const isDisabled = disabled

    return (
        <Pressable 
            onPress={onAction} 
            disabled={isDisabled}
            style={[
                styles.button,
                {
                    backgroundColor: isDisabled 
                        ? COLORS.light.disabled 
                        : COLORS.light.primary,

                    borderRadius: RADIUS[rounded],
                    padding: SPACING[size],
                    opacity: isDisabled ? 0.5 : 1
                },
                
            ]}
        >
            {children}
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