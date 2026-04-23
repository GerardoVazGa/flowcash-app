import { View } from "react-native";
import { AppText } from "../ui/AppText";

export function Section({children, style}) {
    return (
        <View> 
            <View style={style}>{children}</View>
        </View>
    )
}