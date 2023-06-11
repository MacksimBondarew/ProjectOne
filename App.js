import { StyleSheet, View, ImageBackground } from "react-native";
import BackgroundImage from "./assets/image/BackgroundImage.png";
import RegistrationScreen from "./components/RegistrationScreen";
import{ useFonts }from "expo-font";
import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./components/PostsScreen";

export default function App() {
    
    const [fontsLoaded] = useFonts({
        "Roboto": require('./assets/fonts/Roboto-Regular.ttf'),
        "RobotoMedium": require('./assets/fonts/Roboto-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.background}>
            <ImageBackground source={BackgroundImage} style={styles.image}>
                <View style={styles.container}>
                        {/* <LoginScreen /> */}
                        <RegistrationScreen />
                        {/* <PostsScreen /> */}
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
