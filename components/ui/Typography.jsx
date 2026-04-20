import { Text, StyleSheet } from "react-native";

export function Title({children, variant = 'large', color = 'black', style}){
    return(
        <Text 
            style={
                [
                    styles.base, 
                    styles[variant], 
                    {color: color},
                    style
                ]
            }
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    base: {
        fontWeight: 'bold'
    },
    small: {
        fontSize: 12
    },
    medium: {
        fontSize: 16
    },
    large: {
        fontSize: 20
    }
});

