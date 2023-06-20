import {
    ImageBackground,
    Text,
    Image,
    View,
    TouchableOpacity,
} from "react-native";
import BackgroundImage from "../assets/image/BackgroundImage.png";
import { StyleSheet } from "react-native";
import test from "../assets/image/test.png";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Message from "../assets/svg/Message";

export default function Profile() {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={BackgroundImage}
            style={stylesProfile.imageBack}
        >
            <View style={stylesProfile.container}>
                <Image style={stylesProfile.image} source={test} />
                <TouchableOpacity style={stylesProfile.leave}>
                    <Ionicons
                        onPress={() => navigation.navigate("Login")}
                        name="exit-outline"
                        size={24}
                        color="#BDBDBD"
                        marginRight={16}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={stylesProfile.removePhoto}>
                    <Entypo
                        name="cross"
                        size={13}
                        style={{ alignSelf: "center", top: "25%" }}
                        color="#BDBDBD"
                    />
                </TouchableOpacity>
                <Text style={stylesProfile.name}>Natali Romanova</Text>
                <Image style={stylesProfile.imageGallery} source={test} />
                <Text style={stylesProfile.altImage}>Ліс</Text>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        height: 18,
                        alignSelf: "flex-start",
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            height: 18,
                            alignSelf: "flex-start",
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                width: 40,
                                height: 18,
                                marginRight: 31,
                            }}
                        >
                            <TouchableOpacity>
                                <Message
                                    size={18}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: 19,
                                    marginLeft: 9,
                                    width: "100%",
                                }}
                            >
                                8
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                height: 18,
                                alignSelf: "flex-start",
                                alignItems: "flex-start",
                                width: '100%'
                            }}
                        >
                            <TouchableOpacity>
                                <Feather
                                    name="thumbs-up"
                                    size={18}
                                    color="orange"
                                />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: 19,
                                    marginLeft: 9,
                                    width: "100%"
                                }}
                            >
                                153
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            height: 18,
                            alignSelf: "flex-start",
                            alignItems: "flex-start",
                            marginLeft: 180,
                        }}
                    >
                        <Feather name="map-pin" size={18} color="#BDBDBD" />
                        <Text
                            style={{
                                marginLeft: 10,
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textDecorationLine: "underline",
                            }}
                        >
                            Ukraine
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const stylesProfile = StyleSheet.create({
    imageBack: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 92,
        alignItems: "center",
        paddingRight: 16,
        paddingLeft: 16,
        position: "relative",
        backgroundColor: "#FFFFFF",
        width: "100%",
        marginTop: 130,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    image: {
        width: 120,
        height: 120,
        left: "40%",
        top: -60,
        position: "absolute",
    },
    leave: {
        position: "absolute",
        left: "100%",
        top: "2%",
    },
    name: {
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 33,
    },
    removePhoto: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: "white",
        borderColor: "#BDBDBD",
        borderWidth: 1,
        position: "absolute",
        left: "70%",
        top: "5%",
    },
    imageGallery: {
        width: "100%",
        height: 240,
        borderRadius: 8,
        marginBottom: 8,
    },
    altImage: {
        textAlign: "left",
        alignSelf: "flex-start",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 19,
        marginBottom: 8,
    },
});
