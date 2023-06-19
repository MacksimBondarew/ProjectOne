import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function CreatePostsScreen() {
    return (
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            <View style={styleCreatePostsScreen.container}>
                <View style={styleCreatePostsScreen.image}>
                    <TouchableOpacity style={styleCreatePostsScreen.load}>
                        <Ionicons
                            name="camera"
                            size={20}
                            color="black"
                            style={styleCreatePostsScreen.icon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styleCreatePostsScreen.text}>Завантажте фото</Text>
                <TextInput
                    style={styleCreatePostsScreen.nameInput}
                    placeholder="Назва..."
                ></TextInput>
                <View style={styleCreatePostsScreen.map}>
                    <TextInput
                        style={styleCreatePostsScreen.mapInput}
                        placeholder="Місцевість..."
                    ></TextInput>
                    <Feather
                        name="map-pin"
                        size={24}
                        style={styleCreatePostsScreen.iconMap}
                        color="#BDBDBD"
                    />
                </View>
                <TouchableOpacity style={styleCreatePostsScreen.buttonPublish}>
                    <Text style={styleCreatePostsScreen.textButtom}>
                        Увійти
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleCreatePostsScreen.delete}>
                    <Feather name="trash-2" size={24} color="#DADADA" />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styleCreatePostsScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        backgroundColor: "#FFFFFF",
    },
    image: {
        height: 240,
        width: "100%",
        backgroundColor: "#E8E8E8",
        marginBottom: 8,
        borderRadius: 8,
    },
    text: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: "#BDBDBD",
        marginBottom: 48,
    },
    icon: {
        color: "#BDBDBD",
        justifyContent: "center",
        top: "30%",
    },
    load: {
        width: 60,
        height: 60,
        alignItems: "center",
        backgroundColor: "white",
        alignSelf: "center",
        top: "40%",
        borderRadius: 50,
    },
    nameInput: {
        width: "100%",
        paddingBottom: 15,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        marginBottom: 32,
        fontSize: 16,
    },
    map: {
        width: "100%",
        position: "relative",
        marginBottom: 32,
    },
    mapInput: {
        width: "100%",
        paddingBottom: 15,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        paddingLeft: 30,
        fontSize: 16,
    },
    iconMap: {
        position: "absolute",
    },
    buttonPublish: {
        backgroundColor: "#F6F6F6",
        width: "100%",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 120,
        paddingRight: 120,
        borderRadius: 100,
        marginBottom: 120,
    },
    textButtom: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        color: "#BDBDBD",
    },
    delete: {
        backgroundColor: "#F6F6F6",
        alignSelf: "center",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 23,
        paddingRight: 23,
        borderRadius: 20,
    },
});
