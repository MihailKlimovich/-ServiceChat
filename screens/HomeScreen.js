import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Platform,
    StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTS } from '../data/post';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import { db } from '../firebase';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        db.collectionGroup('posts').onSnapshot((snapshot) => {
            console.log(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons}></BottomTabs>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default HomeScreen;
