import { View, Text} from "react-native";
import Section from "../../components/layouts/Section.jsx";
import { AppButton } from "../../components/ui/AppButton.jsx";
import { AppText } from "../../components/ui/AppText.jsx";

const styles = {
    width: 50,
    margin: 10,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
}

export function Home(){
    return (
        <Section>
            <AppText variant="display">Home</AppText>
            <AppButton text="Click me" onAction={() => alert("Click")} styles={styles} size="sm" rounded="lg"/>
        </Section>
    )
}


