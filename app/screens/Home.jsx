import { View, Text} from "react-native";
import Section from "../../components/layouts/Section.jsx";
import { Button } from "../../components/ui/Buttons";
import { Title } from "../../components/ui/Typography.jsx";

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
            <Title variant="large">Home</Title>
            <Button text="Click" onAction={() => alert("Click")} styles={styles}/>
        </Section>
    )
}


