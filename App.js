import "react-native-gesture-handler";
import RegistrationScreen from "./components/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./components/Home";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { authStateChangeUser } from "./redux/auth/authOperations";
import { persistor, store } from "./redux/store";
import { Provider, useDispatch } from "react-redux";
const MainStack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authStateChangeUser());
    }, [])

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
