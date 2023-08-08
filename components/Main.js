import RegistrationScreen from "./RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./Home";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
const MainStack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
        RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
                            name="Home"
                            options={{
                                headerShown: false,
                            }}
                            component={Home}
                        />
                    </MainStack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
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
