import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import {
    selectAvatar,
    selectEmail,
    selectLogin,
} from "../redux/auth/authSelectors";
import app from "../config";
import {
    getFirestore,
    collection,
    onSnapshot,
    query,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import Posts from "./Posts";

const db = getFirestore(app);

export default function PostsScreen() {
    const navigation = useNavigation();
    const [posts, setPosts] = useState([]);
    const [commentsCount, setCommentsCount] = useState({});
    const avatar = useSelector(selectAvatar);
    const login = useSelector(selectLogin);
    const email = useSelector(selectEmail);

    const getCommentsCount = async (postId) => {
        try {
            const commentsRef = collection(db, `posts/${postId}/comments`);
            const queryRef = query(commentsRef);
            const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
                const commentsCount = querySnapshot.docs.length;
                setCommentsCount((prev) => ({
                    ...prev,
                    [postId]: commentsCount,
                }));
            });
            return () => unsubscribe();
        } catch (error) {
            console.log(error);
            setCommentsCount((prev) => ({ ...prev, [postId]: 0 }));
        }
    };

    const getAllPost = async () => {
        try {
            await onSnapshot(collection(db, "posts"), (data) => {
                const posts = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setPosts(posts);
                posts.forEach((post) => {
                    getCommentsCount(post.id);
                });
            });
        } catch (error) {
            Alert.alert("Try again");
        }
    };

    useEffect(() => {
        getAllPost();
    }, []);

    return (
        <ScrollView>
            <View style={stylesPostScreen.container}>
                <View style={stylesPostScreen.user}>
                    <Image
                        style={stylesPostScreen.image}
                        source={{ uri: avatar }}
                    />
                    <View>
                        <Text style={stylesPostScreen.name}>{login}</Text>
                        <Text style={stylesPostScreen.email}>{email}</Text>
                    </View>
                </View>
                {posts.length === 0 && (
                    <View style={stylesPostScreen.textWrapper}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("CreatePostsScreen")
                            }
                            style={stylesPostScreen.buttonForm}
                        >
                            <Text style={stylesPostScreen.textButton}>
                                Створити публікацію
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                {posts && (
                    <ScrollView horizontal={true} style={{ width: "100%" }}>
                        <FlatList
                            style={{ width: "100%" }}
                            data={posts}
                            renderItem={({ item, _, index }) => (
                                <Posts
                                    key={index}
                                    postName={item.name}
                                    postImg={item.photo}
                                    postAddress={item.locationName}
                                    postLocation={item.location}
                                    postId={item.id}
                                    commentsCount={commentsCount}
                                />
                            )}
                        />
                    </ScrollView>
                )}
            </View>
        </ScrollView>
    );
}

const stylesPostScreen = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
        backgroundColor: "#FFFFFF",
        maxWidth: "100%",
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 32,
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
    textWrapper: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 32,
        marginLeft: "auto",
        marginRight: "auto",
    },
    text: {
        fontStyle: "normal",
        fontSize: 16,
        color: "#b1aaaa",
        marginBottom: 12,
    },
    buttonForm: {
        backgroundColor: "#FF6C00",
        color: "black",
        marginBottom: 16,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 100,
    },
    textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Roboto",
        fontWeight: 700,
    },
});
