import React from "react";
import { format } from "date-fns";
import { en } from "date-fns/locale";
import { Image, View, FlatList, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import ComentItem from "./ComentItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../redux/auth/authSelectors";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { app } from "../config";
import {
    getFirestore,
    doc,
    collection,
    addDoc,
    onSnapshot,
} from "firebase/firestore";

const db = getFirestore(app);

const formatDate = (date) => {
    return format(Date.parse(date), "dd MMMM, yyyy | HH:mm:ss", {
        locale: en,
    });
};

export default function CommentsScreen({ route }) {
    const navigation = useNavigation();
    const { postId, postImg } = route.params;
    const [comment, setComment] = useState("");
    const [allComments, setAllComments] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);

    const userName = useSelector(selectLogin);

    const createComentar = async () => {
        if (!comment.trim()) {
            Alert.alert("Комментарий не может быть пустым");
            return;
        }
        const docRef = await doc(db, "posts", postId);

        await addDoc(collection(docRef, "comments"), {
            comment,
            userName,
            postedDate: formatDate(new Date()),
        });

        setComment("")
    };

    const getAllPosts = async () => {
        try {
            const docRef = await doc(db, "posts", postId);

            onSnapshot(collection(docRef, "comments"), (data) =>
                setAllComments(
                    data.docs.map((doc) => ({
                        ...doc.data(),
                        postId: doc.id,
                    }))
                )
            );

            setCommentsCount(Number(allComments.length));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    useEffect(() => {
        navigation.setParams({ commentsCount: commentsCount });
    }, [commentsCount]);

    return (
        <View style={styleComentar.container}>
            <Image style={styleComentar.image} source={{ uri: postImg }} />

            <FlatList
                data={allComments}
                renderItem={({ item, _, index }) => (
                    <ComentItem
                        key={index}
                        text={item.comment}
                        time={item.postedDate}
                        postId={postId}
                    />
                )}
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
                    onChangeText={(value) => setComment(value)}
                    value={comment}
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
                    onPress={createComentar}
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
