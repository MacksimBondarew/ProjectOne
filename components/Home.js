import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import Profile from "./Profile";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../redux/auth/authOperations";

export default function Home() {
    const dispatch = useDispatch();

    const Tabs = createBottomTabNavigator();
    const navigation = useNavigation();
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    height: 80,
                    paddingTop: 9,
                    paddingBottom: 20,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="grid-outline"
                            size={24}
                            color={focused ? "orange" : "#212121CC"}
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
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Login");
                                dispatch(authSignOutUser);
                            }}
                        >
                            <Ionicons
                                onPress={() => {
                                    navigation.navigate("Login");
                                    dispatch(authSignOutUser);
                                }}
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
                    title: "Коментарі",
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
                    tabBarIcon: () => null,
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },
                    headerLeft: () => (
                        <TouchableOpacity>
                            <AntDesign
                                onPress={() => navigation.navigate("Home")}
                                name="arrowleft"
                                size={24}
                                color="black"
                                marginLeft={16}
                            />
                        </TouchableOpacity>
                    ),
                }}
                name="CommentScreen"
                component={CommentsScreen}
            />

            <Tabs.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="user"
                            size={24}
                            color={focused ? "orange" : "#212121CC"}
                        />
                    ),
                    headerShown: false,
                }}
                name="Profile"
                component={Profile}
            />
            <Tabs.Screen
                options={{
                    title: "Карта",
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
                    tabBarIcon: () => null,
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },
                    headerLeft: () => (
                        <TouchableOpacity>
                            <AntDesign
                                onPress={() => navigation.navigate("Profile")}
                                name="arrowleft"
                                size={24}
                                color="black"
                                marginLeft={16}
                            />
                        </TouchableOpacity>
                    ),
                }}
                name="MapScreen"
                component={MapScreen}
            />
        </Tabs.Navigator>
    );
}
