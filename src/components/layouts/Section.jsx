import { View } from "react-native";
import { AppText } from "../ui/AppText";

export function Section({title, children, style}) {
    return (
        <View> 
            {title && (
                <AppText variant="headline">{title}</AppText>
                )
            }
            <View style={style}>{children}</View>
        </View>
    )
}