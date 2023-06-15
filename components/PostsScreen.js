import { StyleSheet, Text, View } from "react-native";

export default function PostsScreen() {
    return <View style={stylesPostScreen.container}>
      <Text>
        Macksim
      </Text>
    </View>;
}

const stylesPostScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        backgroundColor: '#ffffff'
    },
});
