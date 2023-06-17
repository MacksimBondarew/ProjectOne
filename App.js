import "react-native-gesture-handler";
import RegistrationScreen from "./components/RegistrationScreen";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./components/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const MainStack = createStackNavigator();

    const PostsScreenOptions = {
        title: "Публікації",
        headerStyle: {
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
        },
        headerStyle: {
            borderBottomWidth: 2,
            borderBottomColor: "#E5E5E5",
        },
        headerLeft: null,
        headerRight: () => (
            <TouchableOpacity>
                <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
        ),
    };

    return (
        <NavigationContainer style={styleApp.container}>
            <MainStack.Navigator initialRouteName="Login">
                <MainStack.Screen
                    name="Registration"
                    options={{
                        headerShown: false,
                    }}
                    component={RegistrationScreen}
                />
                <MainStack.Screen
                    name="Login"
                    options={{
                        headerShown: false,
                    }}
                    component={LoginScreen}
                />
                <MainStack.Screen
                    name="PostScreen"
                    options={PostsScreenOptions}
                    component={PostsScreen}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        backgroundColor: "#FFFFFF",
    },
});
