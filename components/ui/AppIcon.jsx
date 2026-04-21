import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../consonants/colors";

export function AppIcon({name, color, size, style, background}) {
    return (
        <View 
            style = {
                [
                    styles.container,
                    background && { 
                        backgroundColor: COLORS.light[background] || background
                    },
                    style
                ]
            }
        >
            <Ionicons 
                name={name} 
                size={size} 
                color={COLORS.light[color] || color}/>
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