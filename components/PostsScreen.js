import { StyleSheet, Text, View } from "react-native";
import test from "../assets/image/test.png";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function PostsScreen() {

    return (
        <View style={stylesPostScreen.container}>
            <View style={stylesPostScreen.user}>
                <Image style={stylesPostScreen.image} source={test} />
                <View>
                    <Text style={stylesPostScreen.name}>Natali Romanova</Text>
                    <Text style={stylesPostScreen.email}>
                        email@example.com
                    </Text>
                </View>
            </View>
        </View>
    );
}

const stylesPostScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        backgroundColor: "#FFFFFF",
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
    },
    bottomNavigation: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginRight: 8,
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    name: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 13,
        lineHeight: 15,
        display: "flex",
        alignItems: "center",
    },
    email: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 15,
        display: "flex",
        alignItems: "center",
    },
    tabsContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
