import React from "react";
import { StyleSheet } from "react-native";
import { Image, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectAvatar } from "../redux/auth/authSelectors";

export default function ComentItem({ text, time }) {
    const avatar = useSelector(selectAvatar)

    return (
        <View style={styleComentar.comentarFromUser}>
            <View style={styleComentar.blockComentarForUser}>
                <Text style={styleComentar.textComent}>{text}</Text>
                <Text style={styleComentar.timeFromUser}>{time}</Text>
            </View>
            <Image style={styleComentar.avatarUserRight} source={{uri: avatar}} />
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
        width: "87%",

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
