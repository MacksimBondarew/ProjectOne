import {
    ImageBackground,
    Text,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import BackgroundImage from "../assets/image/BackgroundImage.png";
import { StyleSheet } from "react-native";
import test from "../assets/image/test.png";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Message from "../assets/svg/Message";
import { authSignOutUser } from "../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectAvatar, selectLogin } from "../redux/auth/authSelectors";
import app from "../config";
import {
    getFirestore,
    collection,
    onSnapshot,
    query,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import Posts from "./Posts";
import { FlatList } from "react-native";
const db = getFirestore(app);

export default function Profile({ route, navigation}) {
    const [posts, setPosts] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [commentsCount, setCommentsCount] = useState({});
    const avatar = useSelector(selectAvatar);
    const login = useSelector(selectLogin);

    const getAllPost = async () => {
        try {
            onSnapshot(collection(db, "posts"), (data) => {
                const posts = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setPosts(posts);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllPost();
        posts.forEach((post) => {
            getCommentsCount(post.id);
        });
    }, []);

    useEffect(() => {
        if (route.params?.commentsCount) {
            console.log(route.params);
            setCommentsCount((prev) => ({
                ...prev,
                [route.params.postId]: route.params.commentsCount,
            }));
        }
    }, [route.params]);

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

    useEffect(() => {
        getUserPosts();
        return () => getUserPosts();
    }, []);

    const getUserPosts = async () => {
        try {
            const userPostsRef = collection(db, "posts");
            const queryRef = query(userPostsRef, where("userId", "==", userId));
            const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
                const userPosts = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setUserPosts(userPosts);

                if (userPosts && userPosts.length > 0) {
                    userPosts.forEach((post) => {
                        getCommentsCount(post.id.toString());
                    });
                }
            });
            return () => unsubscribe();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <ScrollView>
            <ImageBackground
                source={BackgroundImage}
                style={stylesProfile.imageBack}
            >
                <View style={stylesProfile.container}>
                    <Image
                        style={stylesProfile.image}
                        source={{ uri: avatar }}
                    />
                    <TouchableOpacity
                        style={stylesProfile.leave}
                        onPress={() => {
                            navigation.navigate("Login");
                            dispatch(authSignOutUser);
                        }}
                    >
                        <Ionicons
                            onPress={() => {
                                navigation.navigate("Login");
                                dispatch(authSignOutUser);
                            }}
                            name="exit-outline"
                            size={24}
                            color="#BDBDBD"
                            marginRight={16}
                        />
                    </TouchableOpacity>
                    <Text style={stylesProfile.name}>{login}</Text>
                    {userPosts.length === 0 && (
                        <View style={stylesProfile.textWrapper}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("CreatePostsScreen")
                                }
                                style={stylesProfile.buttonForm}
                            >
                                <Text style={stylesProfile.textButton}>
                                    Створити публікацію
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {userPosts && (
                        <ScrollView horizontal={true} style={{ width: "100%" }}>
                            <FlatList
                                style={{ width: "100%" }}
                                data={userPosts}
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
            </ImageBackground>
        </ScrollView>
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
