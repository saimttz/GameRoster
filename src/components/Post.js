import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Post({ post }) {
    return (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{ uri: post.avatar }} />
                <View style={styles.headerText}>
                    <Text style={styles.username}>{post.username}</Text>
                    <Text style={styles.timestamp}>{post.timestamp}</Text>
                </View>
                <Text style={styles.gameName}>{post.gameName}</Text>
            </View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.hashtags}>
                {post.hashtags.map((hashtag, index) => (
                    <Text key={index} style={styles.hashtag}>#{hashtag}</Text>
                ))}
            </View>
            <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Rejoindre</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#414141',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerText: {
        flexDirection: 'column',
        flex: 1,
    },
    username: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 16,
    },
    timestamp: {
        color: '#b0b0b0',
        fontFamily: 'Amaranth-Regular',
        fontSize: 12,
    },
    gameName: {
        color: '#ff286a',
        fontFamily: 'Amaranth-Bold',
        fontSize: 14,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 18,
        marginBottom: 5,
    },
    description: {
        color: 'white',
        fontFamily: 'Amaranth-Regular',
        fontSize: 14,
        marginBottom: 10,
    },
    hashtags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    hashtag: {
        color: '#ff286a',
        fontFamily: 'Amaranth-Regular',
        fontSize: 14,
        marginRight: 5,
    },
    joinButton: {
        backgroundColor: '#ff286a',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    joinButtonText: {
        color: 'white',
        fontFamily: 'Amaranth-Bold',
        fontSize: 16,
    },
});
