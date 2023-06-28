import React from "react";
import { StyleSheet } from "react-native";
import { Image, View, Text } from "react-native";
import test from "../assets/image/test.png";

export default function ComentItem({ text, time }) {
    return (
        <View style={styleComentar.comentarFromUser}>
            <Image style={styleComentar.avatarUser} source={test} />
            <View style={styleComentar.blockComentarForUser}>
                <Text style={styleComentar.textComent}>
                    {text}
                </Text>
                <Text style={styleComentar.timeForUser}>
                    {time}
                </Text>
            </View>
        </View>
    );
}

const styleComentar = StyleSheet.create({
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
