import { Text, Image, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Message from "../assets/svg/Message";

import React from "react";

export default function Posts({
    postImg,
    postName,
    postAddress,
    postLocation,
    commentsCount,
    postId,
}) {
    const navigation = useNavigation();
    return (
        <View style={stylesProfile.gap}>
            <Image
                style={stylesProfile.imageGallery}
                source={{ uri: postImg }}
            />
            <Text style={stylesProfile.altImage}>{postName}</Text>
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
                        <TouchableOpacity
                            onPress={() => navigation.navigate("CommentScreen", { postId, postImg })}
                        >
                            <Message size={18} />
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
                            {commentsCount[postId] || 0}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            height: 18,
                            alignSelf: "flex-start",
                            alignItems: "flex-start",
                            width: "100%",
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
                                width: "100%",
                            }}
                        >
                            0
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("MapScreen", { postLocation })
                    }
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
                        {postAddress}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const stylesProfile = StyleSheet.create({
    imageBack: {
        flex: 1,
    },
    image: {
        width: "100%",
        height:  "100%",
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
    gap: {
        marginBottom: 32,
    },
});
