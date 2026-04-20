import { Pressable, Text } from "react-native";
export function Button({text, onAction, style}) {
    return (
        <Pressable onPress={onAction} style={style}>
            <Text>{text}</Text>
        </Pressable>
    )
}