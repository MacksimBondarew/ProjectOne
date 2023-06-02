import { StyleSheet, View, ImageBackground } from "react-native";
import BackgroundImage from "./image/BackgroundImage.png";
import RegistrationScreen from "./components/RegistrationScreen";

export default function App() {
    return (
        <View style={styles.background}>
            <ImageBackground source={BackgroundImage} style={styles.image}>
                <View style={styles.container}>
                        <RegistrationScreen />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
});
