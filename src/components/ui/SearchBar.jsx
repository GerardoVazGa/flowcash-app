import { StyleSheet, TextInput, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { AppIcon } from "./AppIcon";
import { IconButton } from "./IconButton";
import { useState } from "react";

export function SearchBar({value, onChange}) {
    const [isFocused, setIsFocused] = useState(false)

    const {theme} = useTheme()
    const styles = getStyles(theme)

    return (
        <View 
            style= {
                [
                    styles.container,
                    {
                        borderColor: isFocused ? theme.colors.primary : theme.colors.outline
                    }
                ]
            }
        >
            <AppIcon
                name="search-outline"
                size={18}
                color="textVariant"
            />

            <TextInput 
                placeholder="Buscar transacciones..." 
                placeholderTextColor={theme.colors.textVariant}
                value={value}
                onChangeText={onChange}
                style={styles.input}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            {value?.length > 0 && (
                <IconButton 
                    icon="close" 
                    size="md"
                    onPress={() => onChange("")}
                    colorIcon="textVariant"
                    background="transparent"
                
                />
            )}
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.sm,
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderRadius: theme.radius.xl,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm
    },
    input: {
        flex: 1,
        color: theme.colors.text
    }
})