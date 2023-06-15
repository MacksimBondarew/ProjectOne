import "react-native-gesture-handler";
import RegistrationScreen from "./components/RegistrationScreen";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./components/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
    };

    return (
        <NavigationContainer>
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
