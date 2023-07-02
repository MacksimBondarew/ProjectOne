import { Provider } from "react-redux";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { View, StyleSheet } from "react-native";

import { store } from "./redux/store";

import { useCallback } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/mainScreen/Home";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
        RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
        RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    const MainStack = createStackNavigator();
    return (
        <>
            <Provider store={store}>
                <View onLayout={onLayoutRootView} style={styleApp.container}>
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
                                name="Main"
                                options={{
                                    headerShown: false,
                                }}
                                component={Home}
                            />
                        </MainStack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        </>
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