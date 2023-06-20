import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import Profile from "./Profile";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const Tabs = createBottomTabNavigator();
    const navigation = useNavigation();
    return (
        <Tabs.Navigator
            initialRouteName="PostsScreen"
            screenOptions={{
                tabBarStyle: {
                    height: 80,
                    paddingTop: 9,
                    paddingBottom: 20,
                },
            }}
            tabBarOptions={{ showLabel: false, activeTintColor: "orange" }}
        >
            <Tabs.Screen
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="grid-outline"
                            size={24}
                            color="#212121CC"
                        />
                    ),

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
                            <Ionicons
                                onPress={() => navigation.navigate("Login")}
                                name="exit-outline"
                                size={24}
                                color="#BDBDBD"
                                marginRight={16}
                            />
                        </TouchableOpacity>
                    ),
                }}
                name="PostsScreen"
                component={PostsScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: () => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#FF6C00",
                                paddingTop: 14,
                                paddingBottom: 14,
                                paddingLeft: 29,
                                paddingRight: 29,
                                borderRadius: 20,
                            }}
                        >
                            <AntDesign name="plus" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    ),
                    title: "Створити публікацію",
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
                    tabBarStyle: { display: "none" },
                    headerLeft: () => (
                        <TouchableOpacity>
                            <AntDesign
                                onPress={() =>
                                    navigation.navigate("PostsScreen")
                                }
                                name="arrowleft"
                                size={24}
                                color="black"
                                marginLeft={16}
                            />
                        </TouchableOpacity>
                    ),
                }}
                name="CreatePostsScreen"
                component={CreatePostsScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="user" size={24} color="#212121CC" />
                    ),
                    headerShown: false,
                }}
                name="Profile"
                component={Profile}
            />
        </Tabs.Navigator>
    );
}
