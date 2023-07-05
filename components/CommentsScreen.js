import React from "react";
import { Image, View, Text, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import BackgroundImage from "../assets/image/BackgroundImage.png";
import test from "../assets/image/test.png";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import ComentItem from "./ComentItem";

export default function CommentsScreen() {
    const DATA = [
        {
            text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            time: "09 червня, 2020 | 08:40",
            id: "45k6-j54k-4jth",
        },
        {
            text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            time: "09 червня, 2020 | 09:14",
            id: "4116-jfk5-43rh",
        },
        {
            text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            time: "09 червня, 2020 | 09:20",
            id: "4d16-5tt5-4j55",
        },
    ];

    return (
        <View style={styleComentar.container}>
            <Image style={styleComentar.image} source={BackgroundImage} />

            <FlatList
                data={DATA}
                renderItem={({ item }) => <ComentItem text={item.text} time={item.time} />}
                keyExtractor={(item) => item.id}
            />

            <View
                style={{
                    justifyContent: "flex-end",
                    marginTop: "auto",
                    width: "100%",
                }}
            >
                <TextInput
                    placeholder="Коментувати..."
                    style={styleComentar.input}
                ></TextInput>
                <TouchableOpacity
                    style={{
                        width: 34,
                        height: 34,
                        backgroundColor: "#FF6C00",
                        borderRadius: 50,
                        position: "absolute",
                        bottom: "10%",
                        right: "3%",
                    }}
                >
                    <AntDesign
                        name="arrowup"
                        size={24}
                        color="white"
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            top: "20%",
                            left: "15%",
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styleComentar = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: 16,
    },
    image: {
        width: "100%",
        height: 240,
        marginBottom: 34,
        borderRadius: 8,
    },
    comentarFromUser: {
        width: "100%",
        flexDirection: "row",
        borderRadius: 6,
        marginBottom: 24,
    },
    avatarUser: {
        width: 28,
        height: 28,
        borderRadius: 50,
        marginRight: 16,
    },
    avatarUserRight: {
        width: 28,
        height: 28,
        borderRadius: 50,
        marginLeft: 16,
    },
    blockComentarForUser: {
        padding: 16,
        width: "85%",

        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderRadius: 6,
    },
    input: {
        width: "100%",
        height: 50,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 15,
        borderRadius: 50,
        borderColor: "#BDBDBD",
        borderWidth: 2,
        color: "#BDBDBD",
        backgroundColor: "#F6F6F6",
        fontSize: 16,
        fontFamily: "Roboto",
    },
    textComent: {
        color: "#212121",
        fontSize: 13,
        fontFamily: "Roboto",
        lineHeight: 18,
    },
    timeForUser: {
        marginTop: "5%",
        color: "#BDBDBD",
        textAlign: "left",
        fontSize: 10,
        fontFamily: "Roboto",
    },
    timeFromUser: {
        textAlign: "right",
        marginTop: "5%",
        color: "#BDBDBD",
        textAlign: "right",
        fontSize: 10,
        fontFamily: "Roboto",
    },
});
